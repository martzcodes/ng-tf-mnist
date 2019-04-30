import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MnistModule } from './mnist/mnist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MnistModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
