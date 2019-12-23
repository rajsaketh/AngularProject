import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagementSytemComponent } from './content-management-sytem.component';

describe('ContentManagementSytemComponent', () => {
  let component: ContentManagementSytemComponent;
  let fixture: ComponentFixture<ContentManagementSytemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentManagementSytemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagementSytemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
