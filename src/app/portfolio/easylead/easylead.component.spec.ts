import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyleadComponent } from './easylead.component';

describe('EasyleadComponent', () => {
  let component: EasyleadComponent;
  let fixture: ComponentFixture<EasyleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
