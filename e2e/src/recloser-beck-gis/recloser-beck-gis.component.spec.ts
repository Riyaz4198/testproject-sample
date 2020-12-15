/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserBeckGisComponent } from './recloser-beck-gis.component';

describe('RecloserBeckGisComponent', () => {
  let component: RecloserBeckGisComponent;
  let fixture: ComponentFixture<RecloserBeckGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserBeckGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserBeckGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
