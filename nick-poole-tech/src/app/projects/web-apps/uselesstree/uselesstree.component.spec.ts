import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UselesstreeComponent } from './uselesstree.component';

describe('UselesstreeComponent', () => {
  let component: UselesstreeComponent;
  let fixture: ComponentFixture<UselesstreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UselesstreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UselesstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
