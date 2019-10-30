import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApojPage } from './apoj.page';

describe('ApojPage', () => {
  let component: ApojPage;
  let fixture: ComponentFixture<ApojPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApojPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
