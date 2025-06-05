import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegistrationComponent,
    MenuComponent,
    CartComponent,
    OrdersComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
