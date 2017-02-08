/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TraductionComponent } from './traduction.component';

describe('TraductionComponent', () => {
  let component: TraductionComponent;
  let fixture: ComponentFixture<TraductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
