/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserBeckmode2Component } from './recloser-beckmode2.component';

describe('RecloserBeckmode2Component', () => {
  let component: RecloserBeckmode2Component;
  let fixture: ComponentFixture<RecloserBeckmode2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserBeckmode2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserBeckmode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
