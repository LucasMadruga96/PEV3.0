import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiPage } from './podi.page';

describe('PodiPage', () => {
  let component: PodiPage;
  let fixture: ComponentFixture<PodiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
