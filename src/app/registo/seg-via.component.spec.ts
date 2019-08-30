import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegViaComponent } from './seg-via.component';

describe('SegViaComponent', () => {
  let component: SegViaComponent;
  let fixture: ComponentFixture<SegViaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegViaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
