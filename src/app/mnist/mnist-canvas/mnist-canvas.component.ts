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
    this.cx = null;
    this.cx = canvasEl.getContext('2d', {
      alpha: false
    });

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#FFF';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
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
  }

  submit() {
    // this.cx.scale(28 / this.width, 28 / this.height);
    // const rawImg = this.cx.getImageData(0, 0, 28, 28);
    const downscaled = downScaleCanvas(
      this.cx.getImageData(0, 0, this.width, this.height),
      28 / this.width
    );
    const rawImg = downscaled.getImageData(0, 0, 28, 28);
    const img = [];
    for (let i = 0; i < rawImg.data.length; i += 4) {
      const avg =
        (rawImg.data[i] + rawImg.data[i + 1] + rawImg.data[i + 2]) / 3;
      img.push((0.98 * avg) / 255 + 0.01);
    }
    console.log(img);
    this.submission.emit(img);
  }

  reset() {
    this.init();
  }
}

function downScaleCanvas(cv, scale) {
  if (!(scale < 1) || !(scale > 0)) {
    throw new Error('scale must be a positive number <1 ');
  }
  const sqScale = scale * scale; // square scale = area of source pixel within target
  const sw = cv.width; // source image width
  const sh = cv.height; // source image height
  const tw = Math.floor(sw * scale); // target image width
  const th = Math.floor(sh * scale); // target image height
  let sx = 0;
  let sy = 0;
  let sIndex = 0; // source x,y, index within source array
  let tx = 0;
  let ty = 0;
  let yIndex = 0;
  let tIndex = 0; // target x,y, x,y index within target array
  let tX = 0;
  let tY = 0; // rounded tx, ty
  let w = 0;
  let nw = 0;
  let wx = 0;
  let nwx = 0;
  let wy = 0;
  let nwy = 0; // weight / next weight x / y
  // weight is weight of current source point within target.
  // next weight is weight of current source point within next target's point.
  let crossX = false; // does scaled px cross its current px right border ?
  let crossY = false; // does scaled px cross its current px bottom border ?
  const sBuffer = cv.data; // source buffer 8 bit rgba
  const tBuffer = new Float32Array(3 * tw * th); // target buffer Float32 rgb
  let sR = 0;
  let sG = 0;
  let sB = 0; // source's current point r,g,b
  /* untested !
  var sA = 0;  //source alpha  */

  for (sy = 0; sy < sh; sy++) {
    ty = sy * scale; // y src position within target
    tY = 0 || ty; // rounded : target pixel's y
    yIndex = 3 * tY * tw; // line index within target array
    crossY = tY !== (0 || ty + scale);
    if (crossY) {
      // if pixel is crossing botton target pixel
      wy = tY + 1 - ty; // weight of point within target pixel
      nwy = ty + scale - tY - 1; // ... within y+1 target pixel
    }
    for (sx = 0; sx < sw; sx++, sIndex += 4) {
      tx = sx * scale; // x src position within target
      tX = 0 || tx; // rounded : target pixel's x
      tIndex = yIndex + tX * 3; // target pixel index within target array
      crossX = tX !== (0 || tx + scale);
      if (crossX) {
        // if pixel is crossing target pixel's right
        wx = tX + 1 - tx; // weight of point within target pixel
        nwx = tx + scale - tX - 1; // ... within x+1 target pixel
      }
      sR = sBuffer[sIndex]; // retrieving r,g,b for curr src px.
      sG = sBuffer[sIndex + 1];
      sB = sBuffer[sIndex + 2];

      /* !! untested : handling alpha !!
             sA = sBuffer[sIndex + 3];
             if (!sA) continue;
             if (sA != 0xFF) {
                 sR = (sR * sA) >> 8;  // or use /256 instead ??
                 sG = (sG * sA) >> 8;
                 sB = (sB * sA) >> 8;
             }
          */
      if (!crossX && !crossY) {
        // pixel does not cross
        // just add components weighted by squared scale.
        tBuffer[tIndex] += sR * sqScale;
        tBuffer[tIndex + 1] += sG * sqScale;
        tBuffer[tIndex + 2] += sB * sqScale;
      } else if (crossX && !crossY) {
        // cross on X only
        w = wx * scale;
        // add weighted component for current px
        tBuffer[tIndex] += sR * w;
        tBuffer[tIndex + 1] += sG * w;
        tBuffer[tIndex + 2] += sB * w;
        // add weighted component for next (tX+1) px
        nw = nwx * scale;
        tBuffer[tIndex + 3] += sR * nw;
        tBuffer[tIndex + 4] += sG * nw;
        tBuffer[tIndex + 5] += sB * nw;
      } else if (crossY && !crossX) {
        // cross on Y only
        w = wy * scale;
        // add weighted component for current px
        tBuffer[tIndex] += sR * w;
        tBuffer[tIndex + 1] += sG * w;
        tBuffer[tIndex + 2] += sB * w;
        // add weighted component for next (tY+1) px
        nw = nwy * scale;
        tBuffer[tIndex + 3 * tw] += sR * nw;
        tBuffer[tIndex + 3 * tw + 1] += sG * nw;
        tBuffer[tIndex + 3 * tw + 2] += sB * nw;
      } else {
        // crosses both x and y : four target points involved
        // add weighted component for current px
        w = wx * wy;
        tBuffer[tIndex] += sR * w;
        tBuffer[tIndex + 1] += sG * w;
        tBuffer[tIndex + 2] += sB * w;
        // for tX + 1; tY px
        nw = nwx * wy;
        tBuffer[tIndex + 3] += sR * nw;
        tBuffer[tIndex + 4] += sG * nw;
        tBuffer[tIndex + 5] += sB * nw;
        // for tX ; tY + 1 px
        nw = wx * nwy;
        tBuffer[tIndex + 3 * tw] += sR * nw;
        tBuffer[tIndex + 3 * tw + 1] += sG * nw;
        tBuffer[tIndex + 3 * tw + 2] += sB * nw;
        // for tX + 1 ; tY +1 px
        nw = nwx * nwy;
        tBuffer[tIndex + 3 * tw + 3] += sR * nw;
        tBuffer[tIndex + 3 * tw + 4] += sG * nw;
        tBuffer[tIndex + 3 * tw + 5] += sB * nw;
      }
    } // end for sx
  } // end for sy

  // create result canvas
  const resCV = document.createElement('canvas');
  resCV.width = tw;
  resCV.height = th;
  const resCtx = resCV.getContext('2d');
  const imgRes = resCtx.getImageData(0, 0, tw, th);
  const tByteBuffer = imgRes.data;
  // convert float32 array into a UInt8Clamped Array
  let pxIndex = 0; //
  for (
    sIndex = 0, tIndex = 0;
    pxIndex < tw * th;
    sIndex += 3, tIndex += 4, pxIndex++
  ) {
    tByteBuffer[tIndex] = Math.ceil(tBuffer[sIndex]);
    tByteBuffer[tIndex + 1] = Math.ceil(tBuffer[sIndex + 1]);
    tByteBuffer[tIndex + 2] = Math.ceil(tBuffer[sIndex + 2]);
    tByteBuffer[tIndex + 3] = 255;
  }
  // writing result to canvas.
  resCtx.putImageData(imgRes, 0, 0);
  return resCtx;
}
