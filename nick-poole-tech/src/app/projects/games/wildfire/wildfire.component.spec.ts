import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildfireComponent } from './wildfire.component';

describe('WildfireComponent', () => {
  let component: WildfireComponent;
  let fixture: ComponentFixture<WildfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
