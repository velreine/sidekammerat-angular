import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OtherFormComponent } from './other-form/other-form.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { DisabledComponent } from './disabled/disabled.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    OtherFormComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    DisabledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
