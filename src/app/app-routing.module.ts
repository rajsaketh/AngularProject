import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { OnlineFoodDeliveryComponent } from './online-food-delivery/online-food-delivery.component';
import { OnlineGroceryShoppingComponent } from './online-grocery-shopping/online-grocery-shopping.component';
import { OnlineBankingComponent } from './online-banking/online-banking.component';
import { ContentManagementSytemComponent } from './content-management-sytem/content-management-sytem.component';
 import { CartComponent } from './cart/cart.component';
import { AutomativePartsComponent } from './automative-parts/automative-parts.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { GroceryCartComponent } from './grocery-cart/grocery-cart.component';
import { OnlineNotesComponent } from './online-notes/online-notes.component';
import { MultiClientWebServicesComponent } from './multi-client-web-services/multi-client-web-services.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"home", component:HomeComponent},
    {path:"photos", component:PhotosComponent}, 
    {path:"onlinefooddelivery", component:OnlineFoodDeliveryComponent},
    {path:"onlinegroceryshopping", component:OnlineGroceryShoppingComponent},
    {path:"onlinebanking", component:OnlineBankingComponent},
    {path:"contentmanagement", component:ContentManagementSytemComponent},
     {path:"cart", component:CartComponent},
    {path:"automativeparts", component:AutomativePartsComponent},
    {path:"fooddelivery", component:FoodDeliveryComponent},
    {path:"netbanking", component:NetBankingComponent},
    {path:"grocerycart", component:GroceryCartComponent},
    {path:"onlinenotes", component:OnlineNotesComponent},
    {path:"multiclientservices", component:MultiClientWebServicesComponent},
    {path:"productdetails", component:ProductDetailsComponent}, 
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
