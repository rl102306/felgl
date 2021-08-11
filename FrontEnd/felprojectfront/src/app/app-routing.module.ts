import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [

  {path: 'login' , component: LoginComponent},

  {path: 'upload-page', component: UploadPageComponent},

  {path:'' , redirectTo:'' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
