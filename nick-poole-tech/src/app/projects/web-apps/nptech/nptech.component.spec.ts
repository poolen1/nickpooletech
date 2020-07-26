import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NptechComponent } from './nptech.component';

describe('NptechComponent', () => {
  let component: NptechComponent;
  let fixture: ComponentFixture<NptechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NptechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NptechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
