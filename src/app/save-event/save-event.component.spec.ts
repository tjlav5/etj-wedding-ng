/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaveEventComponent } from './save-event.component';

describe('SaveEventComponent', () => {
  let component: SaveEventComponent;
  let fixture: ComponentFixture<SaveEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
