/*============================================;
Title: Assignment 9.3 - Bob's Computer Repair Shop;
Author: Professor Krasso;
Date: 3/1/2021;
Modified By: Jonathan Roland;
Description: This site is meant to demonstrate Bob's Computer Repair Shop as an online ordering platform;
===========================================*/

//This file provides the work-orders component, where workers can check off orders as completed and shipped.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-orders',
  templateUrl: './worker-orders.component.html',
  styleUrls: ['./worker-orders.component.css']
})
export class WorkerOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
