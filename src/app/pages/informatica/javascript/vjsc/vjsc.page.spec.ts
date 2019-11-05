import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjscPage } from './vjsc.page';

describe('VjscPage', () => {
  let component: VjscPage;
  let fixture: ComponentFixture<VjscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjscPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
