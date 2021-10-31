import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ActiveComponent } from './pages/user/active/active.component';
import { SinglproductComponent } from './pages/product/singlproduct/singlproduct.component';
import { AllOrdersComponent } from './pages/order/all-orders/all-orders.component';
import { AddorderComponent } from './pages/order/addorder/addorder.component';
import { UpdateComponent } from './pages/order/update/update.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { Reg2Component } from './pages/user/reg2/reg2.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { LoggedGuard } from './providers/guards/logged.guard';
import { NotLoggedGuard } from './providers/guards/not-logged.guard';
import { AllproductsComponent } from './pages/product/allproducts/allproducts.component';




const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"user", children:[
    {path:"", component:ProfileComponent , }, //canDeactivate:[NotLoggedGuard]
    {path:"register", component:RegisterComponent},
    {path:"reg2", component:Reg2Component},
    {path:"activate/:id", component:ActiveComponent},
    {path:"login", component:LoginComponent ,} // canActivate:[LoggedGuard]
  ]},
  {path:"product", children:[
    {path:"", component:AllproductsComponent},
    {path:"add", component:AddproductComponent},
    {path:"singlprod/:id" , component:SinglproductComponent}
  ]},

  {path:"order", children:[
    {path:"", component:AllOrdersComponent},
    {path:"add", component:AddorderComponent},
    {path:"singlprod/:id" , component:UpdateComponent}
  ]},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
