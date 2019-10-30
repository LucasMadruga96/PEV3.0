import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VajPage } from './vaj.page';

describe('VajPage', () => {
  let component: VajPage;
  let fixture: ComponentFixture<VajPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VajPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VajPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
