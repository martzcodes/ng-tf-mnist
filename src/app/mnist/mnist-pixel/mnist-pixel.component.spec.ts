import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistPixelComponent } from './mnist-pixel.component';

describe('MnistPixelComponent', () => {
  let component: MnistPixelComponent;
  let fixture: ComponentFixture<MnistPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
