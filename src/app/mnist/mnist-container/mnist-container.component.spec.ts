import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistContainerComponent } from './mnist-container.component';

describe('MnistContainerComponent', () => {
  let component: MnistContainerComponent;
  let fixture: ComponentFixture<MnistContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
