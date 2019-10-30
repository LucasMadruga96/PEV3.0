import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodhPage } from './podh.page';

describe('PodhPage', () => {
  let component: PodhPage;
  let fixture: ComponentFixture<PodhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
