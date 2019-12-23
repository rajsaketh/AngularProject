import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { OnlineFoodDeliveryComponent } from './online-food-delivery/online-food-delivery.component';
import { OnlineGroceryShoppingComponent } from './online-grocery-shopping/online-grocery-shopping.component';
import { OnlineBankingComponent } from './online-banking/online-banking.component';
import { ContentManagementSytemComponent } from './content-management-sytem/content-management-sytem.component';
// import { CartComponent } from './cart/cart.component';
import { AutomativePartsComponent } from './automative-parts/automative-parts.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { CartComponent } from './cart/cart.component';
import { GroceryCartComponent } from './grocery-cart/grocery-cart.component';
import { OnlineNotesComponent } from './online-notes/online-notes.component';
import { MultiClientWebServicesComponent } from './multi-client-web-services/multi-client-web-services.component';
import { BillingComponent } from './billing/billing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PhotosComponent,
    OnlineFoodDeliveryComponent,
    OnlineGroceryShoppingComponent,
    OnlineBankingComponent,
    ContentManagementSytemComponent,
    // CartComponent,
    AutomativePartsComponent,
    FoodDeliveryComponent,
    NetBankingComponent,
    CartComponent,
    GroceryCartComponent,
    OnlineNotesComponent,
    MultiClientWebServicesComponent,
    BillingComponent,
    ProductDetailsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
