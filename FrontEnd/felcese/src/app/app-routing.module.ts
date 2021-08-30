import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';

import { UcfComponent } from './ucf/ucf.component';

import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './AuthGuard/auth-guard.service';

const routes: Routes = [

  {path: 'login', component:LoginComponent},


  {path: 'ucf' , component:UcfComponent, canActivate : [AuthGuardService]},

  {path: 'signup' , component:SignupComponent,canActivate : [AuthGuardService]},

  {path: '', redirectTo:'',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
