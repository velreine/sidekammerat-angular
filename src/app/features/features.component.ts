import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  features = ['Very good product', 'Realiable Service', '99% Uptime Guarantee', 'Full customization'];

  currentFeatureToAdd: string = null;

  public removeFeature(feature) {
    const index = this.features.indexOf(feature);
    this.features.splice(index, 1);
  }

  public addFeature() {
    
    console.log(this.currentFeatureToAdd);

    if(this.currentFeatureToAdd) {
      this.features.push(this.currentFeatureToAdd);
      this.currentFeatureToAdd = null;  
    }
      
  }

  ngOnInit(): void {
  }

}
