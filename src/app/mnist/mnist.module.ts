import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnistService } from './mnist.service';
import { MnistContainerComponent } from './mnist-container/mnist-container.component';
import { MnistCanvasComponent } from './mnist-canvas/mnist-canvas.component';

@NgModule({
  declarations: [MnistContainerComponent, MnistCanvasComponent],
  imports: [CommonModule],
  providers: [MnistService]
})
export class MnistModule {}
