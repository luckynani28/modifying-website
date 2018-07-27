import { CinemaService } from './../../cinema.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinema143Component } from './cinema143.component';

describe('Cinema143Component', () => {
  let component: Cinema143Component;
  let fixture: ComponentFixture<Cinema143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cinema143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cinema143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
