import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryCartComponent } from './grocery-cart.component';

describe('GroceryCartComponent', () => {
  let component: GroceryCartComponent;
  let fixture: ComponentFixture<GroceryCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
