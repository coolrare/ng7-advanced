import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms2Component } from './forms2.component';

describe('Forms2Component', () => {
  let component: Forms2Component;
  let fixture: ComponentFixture<Forms2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forms2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
