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
  selector: 'app-mnist-img',
  templateUrl: './mnist-img.component.html',
  styleUrls: ['./mnist-img.component.css']
})
export class MnistImgComponent implements AfterViewInit {
  @Input()
  data: number[];
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = 200;
  @Input() public height = 200;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.init();
  }

  private init() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const width = Math.sqrt(this.data.length);
    const height = Math.sqrt(this.data.length);
    const ratio = height / 28;
    const scaleFactor = (ratio * this.height * height) / 28;
    this.cx = null;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width * ratio;
    canvasEl.height = this.height * ratio;

    const tempImg = [];
    this.data.forEach(dat => {
      tempImg.push(dat);
      tempImg.push(dat);
      tempImg.push(dat);
      tempImg.push(255);
    });

    const img = new Uint8ClampedArray(width * height * 4);
    tempImg.forEach((v, i) => {
      img[i] = v;
    });

    const idata = this.cx.createImageData(width, height);

    // set our buffer as source
    idata.data.set(img);

    const newCanvas = document.createElement('canvas');
    newCanvas.width = width;
    newCanvas.height = height;
    newCanvas.getContext('2d').putImageData(idata, 0, 0);

    this.cx.scale(scaleFactor, scaleFactor);
    this.cx.drawImage(newCanvas, 0, 0);

    // var srcCtx = $("#src")[0].getContext("2d");
    // srcCtx.fillRect(0, 0, 50, 50);
    // var imageData = srcCtx.getImageData(0, 0, 100, 100);
    // var destCtx = $("#dest")[0].getContext("2d");

    // var newCanvas = $("<canvas>")
    //     .attr("width", imageData.width)
    //     .attr("height", imageData.height)[0];

    // newCanvas.getContext("2d").putImageData(imageData, 0, 0);

    // destCtx.scale(1.5, 1.5);
    // destCtx.drawImage(newCanvas, 0, 0);
  }
}
