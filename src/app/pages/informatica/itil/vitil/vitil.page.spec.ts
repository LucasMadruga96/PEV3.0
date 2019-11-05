import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitilPage } from './vitil.page';

describe('VitilPage', () => {
  let component: VitilPage;
  let fixture: ComponentFixture<VitilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
