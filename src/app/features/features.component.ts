import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  features = ['Very good product', 'Realiable Service', '99% Uptime Guarantee', 'Full customization'];

  ngOnInit(): void {
  }

}
