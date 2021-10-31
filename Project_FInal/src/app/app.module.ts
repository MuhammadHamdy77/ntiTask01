import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ActiveComponent } from './pages/user/active/active.component';
import { SinglproductComponent } from './pages/product/singlproduct/singlproduct.component';
import { UpdateComponent } from './pages/order/update/update.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DoctorcardComponent } from './shared/doctorcard/doctorcard.component';
import { Error404Component } from './pages/general/error404/error404.component';
import {HomeComponent} from './pages/general/home/home.component';
import { Reg2Component } from './pages/user/reg2/reg2.component';
import { GlobalService } from './providers/services/global.service';
import { AuthInterceptor } from './providers/interceptor/auth.interceptor';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { AllproductsComponent } from './pages/product/allproducts/allproducts.component';
import { AllOrdersComponent } from './pages/order/all-orders/all-orders.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ActiveComponent,
    AppComponent,
    SinglproductComponent,
    UpdateComponent,
    NavbarComponent,
    FooterComponent,
    DoctorcardComponent,
    Error404Component,
    Reg2Component,
    AddproductComponent,
    AllproductsComponent,
    AllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    GlobalService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
