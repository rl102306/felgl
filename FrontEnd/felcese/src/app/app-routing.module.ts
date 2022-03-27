import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

import { UcfComponent } from './ucf/ucf.component';

import { LoginComponent } from './login/login.component';

import { CanActivateGuard } from './AuthGuard/can-activate.guard';

import { VideoTutorialComponent } from './video-tutorial/video-tutorial.component';

import { PaymentComponent } from './payment/payment.component';

import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';

const routes: Routes = [

  /* {path: '', redirectTo:'',pathMatch:'full'} */

  {path: '' , component:VideoTutorialComponent},

  {path: 'login', component:LoginComponent},


  {path: 'ucf' , component:UcfComponent,canActivate : [CanActivateGuard]},

  {path: 'signup' , component:SignupComponent},

  {path:'payment', component:PaymentComponent},

  {path:'politica-privacidad', component:PoliticaPrivacidadComponent}

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
