import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodgPage } from './podg.page';

describe('PodgPage', () => {
  let component: PodgPage;
  let fixture: ComponentFixture<PodgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
