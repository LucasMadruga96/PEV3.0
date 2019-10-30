import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitoPage } from './direito.page';

describe('DireitoPage', () => {
  let component: DireitoPage;
  let fixture: ComponentFixture<DireitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
