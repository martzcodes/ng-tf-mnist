import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-mnist-canvas',
  templateUrl: './mnist-canvas.component.html',
  styleUrls: ['./mnist-canvas.component.css']
})
export class MnistCanvasComponent implements AfterViewInit {
  @Output()
  submission: EventEmitter<any> = new EventEmitter();
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;
  @ViewChild('downsampled') public downsampled: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = 200;
  @Input() public height = 200;

  private cx: CanvasRenderingContext2D;
  private dx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.init();
  }

  private init() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d', {
      alpha: false
    });

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 0.15 * this.width;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#FFF';

    this.cx.fillStyle = '#000';
    this.cx.fillRect(0, 0, this.width, this.height);

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);

    this.initDown();
  }

  private initDown() {
    const downsampledEl: HTMLCanvasElement = this.downsampled.nativeElement;

    // set the width and height
    downsampledEl.width = 28;
    downsampledEl.height = 28;

    this.dx = downsampledEl.getContext('2d', {
      alpha: false
    });
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap(e => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }

    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from

      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }

    this.downScaleCanvas(this.cx.getImageData(0, 0, this.width, this.height));
  }

  submit() {
    // this.cx.scale(28 / this.width, 28 / this.height);
    // const rawImg = this.cx.getImageData(0, 0, 28, 28);
    const downscaled = this.downScaleCanvas(
      this.cx.getImageData(0, 0, this.width, this.height)
    );
    const rawImg = downscaled.getImageData(0, 0, 28, 28);
    const img = [];
    for (let i = 0; i < rawImg.data.length; i += 4) {
      const avg =
        (rawImg.data[i] + rawImg.data[i + 1] + rawImg.data[i + 2]) / 3;
      img.push((0.98 * avg) / 255 + 0.01);
    }
    this.submission.emit(img);
  }

  reset() {
    this.init();
    this.submission.emit(null);
  }

  downScaleCanvas(cv) {
    this.initDown();
    const newCanvas = document.createElement('canvas');
    newCanvas.width = this.width;
    newCanvas.height = this.height;
    newCanvas.getContext('2d').putImageData(cv, 0, 0);

    this.dx.scale(28 / this.width, 28 / this.height);
    this.dx.drawImage(newCanvas, 0, 0);

    return this.dx;
  }
}
