import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGroceryShoppingComponent } from './online-grocery-shopping.component';

describe('OnlineGroceryShoppingComponent', () => {
  let component: OnlineGroceryShoppingComponent;
  let fixture: ComponentFixture<OnlineGroceryShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineGroceryShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGroceryShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
