/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesignComponent } from './design.component';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sayHello', () => {
    let designComp = new DesignComponent();
    designComp.firstName = 'Mahdi';
    designComp.lastName = 'kallel';
    expect(designComp.sayHello()).toBe('HelloMahdi kallel');
    /**/
  });

  it('should calculta', () => {
    let designComp = new DesignComponent();
    designComp.a = 2;
    designComp.b = 5;
    expect(designComp.calculate(designComp.a,designComp.b)).toBe(7);
    /**/
  });
});
