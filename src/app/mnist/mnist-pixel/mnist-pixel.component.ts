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
  selector: 'app-mnist-pixel',
  templateUrl: './mnist-pixel.component.html',
  styleUrls: ['./mnist-pixel.component.css']
})
export class MnistPixelComponent implements AfterViewInit {
  @Input()
  data: number;
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;

  // setting a width and height for the canvas
  @Input() public width = 5;
  @Input() public height = 5;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    this.init();
  }

  private init() {
    // get the context
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.fillStyle = `rgb(${this.data}, ${this.data}, ${this.data})`;

    this.cx.fillRect(0, 0, this.width, this.height);
  }
}
