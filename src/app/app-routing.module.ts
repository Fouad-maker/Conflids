import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { CartComponent } from './client/cart/cart.component';

import { CheckoutComponent } from './client/checkout/checkout.component';






const routes: Routes = [
  

  { path: 'cart', component: CartComponent },
  
  { path:'checkout',component:CheckoutComponent},
  
  {path:'client',component:ClientComponent},
  
  {path:'getArticleCart/:id',component:CartComponent},
  {path:'',redirectTo:'/client',pathMatch:'full'},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
