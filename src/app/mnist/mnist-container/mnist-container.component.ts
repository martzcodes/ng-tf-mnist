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
  prediction: number;
  distribution: number[];
  layerImgs: any[];

  constructor(private mnist: MnistService) {
    this.modelAccuracy$ = this.mnist.accuracy;
  }

  ngOnInit() {
    this.mnist.run().then(() => {
      this.loading = false;
    });
  }

  submission(img) {
    if (img) {
      const { prediction, distribution, layerImgs } = this.mnist.infer(img);
      this.prediction = prediction as number;
      this.distribution = distribution;
      this.layerImgs = layerImgs;
    } else {
      this.prediction = null;
      this.distribution = null;
      this.layerImgs = [];
    }
  }

  toggleVisor() {
    this.mnist.toggle();
  }
}
