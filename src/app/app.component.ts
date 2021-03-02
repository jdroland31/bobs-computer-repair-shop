/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file acts as the main component.

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WorkerOrdersComponent } from './worker-orders/worker-orders.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Bob's Computer Repair Shop";
//The shoppingCart is an array of the options chosen in the home component, to be shared with it's sibling checkout component via @Input/@Output.
  public shoppingCart: any[];

  childCartSelected(cart: any[]){
    this.shoppingCart = cart;
  }
}
