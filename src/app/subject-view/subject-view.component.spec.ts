import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectViewComponent } from './subject-view.component';

describe('SubjectViewComponent', () => {
  let component: SubjectViewComponent;
  let fixture: ComponentFixture<SubjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
