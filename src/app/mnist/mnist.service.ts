import { Injectable } from '@angular/core';
import { MnistData } from './mnist-data';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { Subject, BehaviorSubject } from 'rxjs';
import { Visor } from '@tensorflow/tfjs-vis/dist/visor';

@Injectable({
  providedIn: 'root'
})
export class MnistService {
  data: MnistData;
  accuracy: BehaviorSubject<number> = new BehaviorSubject(null);
  model: tf.Sequential;
  visor: Visor;

  constructor() {}

  // showExamples() {
  //   // Create a container in the visor
  //   const surface = tfvis
  //     .visor()
  //     .surface({ name: 'Input Data Examples', tab: 'Input Data' });

  //   // Get the examples
  //   const examples = this.data.nextTestBatch(20);
  //   const numExamples = examples.xs.shape[0];

  //   // Create a canvas element to render each example
  //   for (let i = 0; i < numExamples; i++) {
  //     const imageTensor = tf.tidy(() => {
  //       // Reshape the image to 28x28 px
  //       return examples.xs
  //         .slice([i, 0], [1, examples.xs.shape[1]])
  //         .reshape([28, 28, 1]);
  //     });

  //     const canvas = document.createElement('canvas');
  //     canvas.width = 28;
  //     canvas.height = 28;
  //     tf.browser.toPixels(imageTensor as any, canvas);
  //     surface.drawArea.appendChild(canvas);
  //   }
  // }

  async run() {
    this.data = new MnistData();
    await this.data.load();
    this.model = this.getModel();
    this.visor = tfvis.visor();
    tfvis.show.modelSummary({ name: 'Model Architecture' }, this.model);

    await this.train();
    this.visor.close();
  }

  toggle() {
    this.visor.toggle();
  }

  getModel() {
    const model = tf.sequential();

    const IMAGE_WIDTH = 28;
    const IMAGE_HEIGHT = 28;
    const IMAGE_CHANNELS = 1;

    // In the first layer of out convolutional neural network we have
    // to specify the input shape. Then we specify some paramaters for
    // the convolution operation that takes place in this layer.
    model.add(
      tf.layers.conv2d({
        inputShape: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
        kernelSize: 3,
        filters: 6,
        activation: 'relu'
      })
    );

    // The MaxPooling layer acts as a sort of downsampling using max values
    // in a region instead of averaging.
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));

    // Repeat another conv2d + maxPooling stack.
    // Note that we have more filters in the convolution.
    model.add(
      tf.layers.conv2d({ kernelSize: 3, filters: 16, activation: 'relu' })
    );
    model.add(tf.layers.maxPooling2d({ poolSize: 2, strides: 2 }));

    // Now we flatten the output from the 2D filters into a 1D vector to prepare
    // it for input into our last layer. This is common practice when feeding
    // higher dimensional data to a final classification output layer.
    model.add(tf.layers.flatten());

    model.add(tf.layers.dense({ units: 64, activation: 'relu' }));

    // Our last layer is a dense layer which has 10 output units, one for each
    // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
    const NUM_OUTPUT_CLASSES = 10;
    model.add(
      tf.layers.dense({
        units: NUM_OUTPUT_CLASSES,
        // kernelInitializer: 'varianceScaling',
        activation: 'softmax'
      })
    );

    // Choose an optimizer, loss function and accuracy metric,
    // then compile and return the model
    const optimizer = tf.train.adam();
    model.compile({
      optimizer,
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    return model;
  }

  async train() {
    const metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
    const container = {
      name: 'Model Training',
      styles: { height: '1000px' }
    };
    const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);

    const BATCH_SIZE = 512;
    const TRAIN_DATA_SIZE = 5500;
    const TEST_DATA_SIZE = 1000;

    const [trainXs, trainYs] = tf.tidy(() => {
      const d = this.data.nextTrainBatch(TRAIN_DATA_SIZE);
      return [d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]), d.labels];
    });

    const [testXs, testYs] = tf.tidy(() => {
      const d = this.data.nextTestBatch(TEST_DATA_SIZE);
      return [d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]), d.labels];
    });

    return this.model.fit(trainXs, trainYs, {
      batchSize: BATCH_SIZE,
      validationData: [testXs, testYs],
      epochs: 10,
      shuffle: true,
      callbacks: {
        ...fitCallbacks,
        onEpochEnd: async (epoch, logs) => {
          const valAcc = logs.val_acc;
          console.log(`Accuracy: ${valAcc}`);
          this.accuracy.next(valAcc);
          await tf.nextFrame();
        }
      }
    });
  }

  infer(img) {
    const inputs = tf.tensor4d(img, [1, 28, 28, 1]);
    inputs.print();
    const layerImgs = [];
    for (let i = 0; i < this.model.layers.length; i++) {
      const tempModel = tf.sequential();
      for (let k = 0; k <= i; k++) {
        tempModel.add(this.model.layers[k]);
      }
      const tempOutput = (tempModel.predict(inputs) as any).dataSync();
      const tempShape = tempModel.layers[tempModel.layers.length - 1]
        .outputShape as any;
      let tempImgs = [];
      if (tempShape.length === 4) {
        let ind = 0;
        tempImgs.push([]);
        for (let m = 0; m < tempOutput.length; m++) {
          if (m >= (ind + 1) * tempShape[1] * tempShape[2]) {
            ind++;
            tempImgs.push([]);
          }
          tempImgs[ind].push(255 * tempOutput[m]);
        }
        layerImgs.push({
          layer: i + 1,
          name: tempModel.layers[tempModel.layers.length - 1].name,
          multiple: true,
          data: tempImgs
        });
      } else {
        tempImgs = tempOutput.map(out => 255 * out);
        layerImgs.push({
          layer: i + 1,
          name: tempModel.layers[tempModel.layers.length - 1].name,
          multiple: false,
          data: tempImgs
        });
      }

      // tempModel.dispose();
    }
    const output = this.model.predict(inputs) as any;
    const distribution = output.dataSync();
    const axis = 1;
    const prediction = Array.from(output.argMax(axis).dataSync())[0];
    inputs.dispose();
    output.dispose();
    return { prediction, distribution, layerImgs };
  }
}
