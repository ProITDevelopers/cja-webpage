import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JovensmaisComponent } from './jovensmais.component';

describe('JovensmaisComponent', () => {
  let component: JovensmaisComponent;
  let fixture: ComponentFixture<JovensmaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JovensmaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JovensmaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
