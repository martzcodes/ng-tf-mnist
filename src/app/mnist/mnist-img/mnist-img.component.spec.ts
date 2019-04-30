import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistImgComponent } from './mnist-img.component';

describe('MnistImgComponent', () => {
  let component: MnistImgComponent;
  let fixture: ComponentFixture<MnistImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
