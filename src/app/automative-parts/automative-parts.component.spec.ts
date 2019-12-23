import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomativePartsComponent } from './automative-parts.component';

describe('AutomativePartsComponent', () => {
  let component: AutomativePartsComponent;
  let fixture: ComponentFixture<AutomativePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomativePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomativePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
