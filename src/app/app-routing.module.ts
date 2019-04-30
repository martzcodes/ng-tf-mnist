import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MnistContainerComponent } from './mnist/mnist-container/mnist-container.component';

const routes: Routes = [
  {
    path: '',
    component: MnistContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
