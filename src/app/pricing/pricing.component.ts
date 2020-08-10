import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { 

    this.a = Math.floor(Math.random() * this.priceStrings.length);

  }

  a = 0;

  priceStrings = ["It's very Cheap", "Special price for you.", "Much cheap 🐶"];

  ngOnInit(): void {
  }

}
