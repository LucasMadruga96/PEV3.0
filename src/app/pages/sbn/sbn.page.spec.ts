import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbnPage } from './sbn.page';

describe('SbnPage', () => {
  let component: SbnPage;
  let fixture: ComponentFixture<SbnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
