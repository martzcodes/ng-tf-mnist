import { TestBed } from '@angular/core/testing';

import { MnistService } from './mnist.service';

describe('MnistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MnistService = TestBed.get(MnistService);
    expect(service).toBeTruthy();
  });
});
