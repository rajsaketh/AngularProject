import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiClientWebServicesComponent } from './multi-client-web-services.component';

describe('MultiClientWebServicesComponent', () => {
  let component: MultiClientWebServicesComponent;
  let fixture: ComponentFixture<MultiClientWebServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiClientWebServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiClientWebServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
