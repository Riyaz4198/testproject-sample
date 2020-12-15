/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserCooperaltComponent } from './recloser-cooperalt.component';

describe('RecloserCooperaltComponent', () => {
  let component: RecloserCooperaltComponent;
  let fixture: ComponentFixture<RecloserCooperaltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserCooperaltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserCooperaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
