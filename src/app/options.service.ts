import { Injectable } from '@angular/core';
import { IOption } from './option.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file is intended to provide a static set of values for the repair options as a service.

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  options: Array<IOption>

  constructor() {
    //Here we instantiate the options as static values of name and price, based on the IOption object.
    this.options = [
      {
        name: 'Password Reset',
        price: 39.99,
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
      },
      {
        name: 'RAM Upgrade',
        price: 129.99,
      },
      {
        name: 'Software Installation',
        price: 49.99,
      },
      {
        name: 'Tune-up',
        price: 89.99,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.00,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
      },
    ]
   }
   // This function returns the options array from the constructor.
  getOptions(): Observable<IOption[]>{
    return of(this.options);
  }
}
