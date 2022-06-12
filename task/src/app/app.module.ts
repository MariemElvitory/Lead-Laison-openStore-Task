import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './all/all.component';
import { ComplexComponent } from './complex/complex.component';
import { CommonModule } from '@angular/common';
import { SimplComponent } from './simpl/simpl.component';
import { ProductIdComponent } from './product-id/product-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AllComponent,
    ComplexComponent,
    SimplComponent,
    ProductIdComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
