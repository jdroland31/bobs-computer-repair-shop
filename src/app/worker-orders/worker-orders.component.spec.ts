/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file serves as the specification for the worker-orders component.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerOrdersComponent } from './worker-orders.component';

describe('WorkerOrdersComponent', () => {
  let component: WorkerOrdersComponent;
  let fixture: ComponentFixture<WorkerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
