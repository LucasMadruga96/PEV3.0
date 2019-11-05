import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VadPage } from './vad.page';

describe('VadPage', () => {
  let component: VadPage;
  let fixture: ComponentFixture<VadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
