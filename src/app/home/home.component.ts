/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file serves as the home component, providing the user with a menu to select computer repair options.

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  total: number;
  cart: any[];

  @Output() cartSelected = new EventEmitter<any[]>();


  constructor() {
    this.cart = [];
  }

  ngOnInit(): void {
  }

  getChanges(){
    let checkBoxes = document.querySelectorAll('.optionCheck');
    let sum = 0;
    this.cart = [];
    for(let i=0;i<checkBoxes.length;i++){
      let checkBox = checkBoxes[i] as HTMLInputElement;
      if(checkBox.checked){
        let price = checkBox.getAttribute('value');
        let name = checkBox.getAttribute('name');
        sum+=Number(price);
        this.cart.push([name,price]);
      }
    }
    this.total = sum;
  }

  onClick(){
    this.cartSelected.emit(this.cart);
  }

}
