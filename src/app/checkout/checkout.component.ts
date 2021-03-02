/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file serves as the checkout component, allowing users to fill out needed information to place an order.
//I could not get the cart data into the checkout component, so it is currently static rather than dynamically showing selections.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() cart: any[];

  constructor() {
    // console.log(this.cart);
   }

  ngOnInit(): void {
  }

}
