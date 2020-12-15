/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserBeckwithComponent } from './recloser-beckwith.component';

describe('RecloserBeckwithComponent', () => {
  let component: RecloserBeckwithComponent;
  let fixture: ComponentFixture<RecloserBeckwithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserBeckwithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserBeckwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
