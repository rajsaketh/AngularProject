import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFoodDeliveryComponent } from './online-food-delivery.component';

describe('OnlineFoodDeliveryComponent', () => {
  let component: OnlineFoodDeliveryComponent;
  let fixture: ComponentFixture<OnlineFoodDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFoodDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
