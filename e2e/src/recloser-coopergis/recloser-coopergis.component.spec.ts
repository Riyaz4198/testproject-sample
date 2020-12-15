/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserCoopergisComponent } from './recloser-coopergis.component';

describe('RecloserCoopergisComponent', () => {
  let component: RecloserCoopergisComponent;
  let fixture: ComponentFixture<RecloserCoopergisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserCoopergisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserCoopergisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
