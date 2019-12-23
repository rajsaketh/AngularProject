import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineNotesComponent } from './online-notes.component';

describe('OnlineNotesComponent', () => {
  let component: OnlineNotesComponent;
  let fixture: ComponentFixture<OnlineNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
