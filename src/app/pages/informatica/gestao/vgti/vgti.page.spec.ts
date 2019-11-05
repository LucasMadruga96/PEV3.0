import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VgtiPage } from './vgti.page';

describe('VgtiPage', () => {
  let component: VgtiPage;
  let fixture: ComponentFixture<VgtiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VgtiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VgtiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
