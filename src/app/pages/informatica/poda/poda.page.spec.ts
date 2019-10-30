import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodaPage } from './poda.page';

describe('PodaPage', () => {
  let component: PodaPage;
  let fixture: ComponentFixture<PodaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
