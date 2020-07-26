import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KsgComponent } from './ksg.component';

describe('KsgComponent', () => {
  let component: KsgComponent;
  let fixture: ComponentFixture<KsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
