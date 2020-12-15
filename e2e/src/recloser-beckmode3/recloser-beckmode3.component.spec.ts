/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserBeckmode3Component } from './recloser-beckmode3.component';

describe('RecloserBeckmode3Component', () => {
  let component: RecloserBeckmode3Component;
  let fixture: ComponentFixture<RecloserBeckmode3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserBeckmode3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserBeckmode3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
