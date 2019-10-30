import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodjsfPage } from './podjsf.page';

describe('PodjsfPage', () => {
  let component: PodjsfPage;
  let fixture: ComponentFixture<PodjsfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodjsfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodjsfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
