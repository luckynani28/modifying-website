import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventusComponent } from './eventus.component';

describe('EventusComponent', () => {
  let component: EventusComponent;
  let fixture: ComponentFixture<EventusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
