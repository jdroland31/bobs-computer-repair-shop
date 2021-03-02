/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

// This file acts as the specification for the options service.

import { TestBed } from '@angular/core/testing';

import { OptionsService } from './options.service';

describe('OptionsService', () => {
  let service: OptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
