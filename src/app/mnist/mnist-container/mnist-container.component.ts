import { Component, OnInit, EventEmitter } from '@angular/core';
import { MnistService } from '../mnist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mnist-container',
  templateUrl: './mnist-container.component.html',
  styleUrls: ['./mnist-container.component.css']
})
export class MnistContainerComponent implements OnInit {
  loading = true;
  modelAccuracy$: Observable<number>;

  constructor(private mnist: MnistService) {
    this.modelAccuracy$ = this.mnist.accuracy;
  }

  ngOnInit() {
    this.mnist.run().then(() => {
      this.loading = false;
    });
  }

  submission(img) {
    this.mnist.infer(img);
  }
}
