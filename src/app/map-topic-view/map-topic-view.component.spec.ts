import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTopicViewComponent } from './map-topic-view.component';

describe('MapTopicViewComponent', () => {
  let component: MapTopicViewComponent;
  let fixture: ComponentFixture<MapTopicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTopicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTopicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
