import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnistService } from './mnist.service';
import { MnistContainerComponent } from './mnist-container/mnist-container.component';
import { MnistCanvasComponent } from './mnist-canvas/mnist-canvas.component';
import { MnistImgComponent } from './mnist-img/mnist-img.component';
import { MnistPixelComponent } from './mnist-pixel/mnist-pixel.component';

@NgModule({
  declarations: [MnistContainerComponent, MnistCanvasComponent, MnistImgComponent, MnistPixelComponent],
  imports: [CommonModule],
  providers: [MnistService]
})
export class MnistModule {}
