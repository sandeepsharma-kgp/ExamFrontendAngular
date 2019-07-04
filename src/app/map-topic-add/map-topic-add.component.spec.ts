import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTopicAddComponent } from './map-topic-add.component';

describe('MapTopicAddComponent', () => {
  let component: MapTopicAddComponent;
  let fixture: ComponentFixture<MapTopicAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTopicAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTopicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
