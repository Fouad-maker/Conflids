import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SmallBannerComponent } from './client/small-banner/small-banner.component';
import { ProductAreaComponent } from './client/product-area/product-area.component';
import { FooterComponent } from './client/footer/footer.component';
import { CartComponent } from './client/cart/cart.component';
import { BreadcrumbsComponent } from './client/cart/breadcrumbs/breadcrumbs.component';
import { ShoppingCartComponent } from './client/cart/shopping-cart/shopping-cart.component';
import { ShoppingSummeryComponent } from './client/cart/shopping-cart/shopping-summery/shopping-summery.component';
import { TotalAmountComponent } from './client/cart/shopping-cart/total-amount/total-amount.component';
import { ClientComponent } from './client/client.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { BreadcrumbsCheckoutComponent } from './client/checkout/breadcrumbs-checkout/breadcrumbs-checkout.component';
import { CheckoutBodyComponent } from './client/checkout/checkout-body/checkout-body.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';  

import { Ng2SearchPipeModule } from'ng2-search-filter';
import { HeaderComponent } from './client/header/header.component';






@NgModule({
  declarations: [
    
    
    
    
    AppComponent,
    HeaderComponent,
    
    SmallBannerComponent,
    ProductAreaComponent,
    
    
    FooterComponent,
    
    CartComponent,
    BreadcrumbsComponent,
    ShoppingCartComponent,
    ShoppingSummeryComponent,
    TotalAmountComponent,
    ClientComponent,
    CheckoutComponent,
    
    BreadcrumbsCheckoutComponent,
    CheckoutBodyComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

