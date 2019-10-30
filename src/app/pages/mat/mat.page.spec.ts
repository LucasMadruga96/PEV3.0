import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPage } from './mat.page';

describe('MatPage', () => {
  let component: MatPage;
  let fixture: ComponentFixture<MatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
