import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UcfComponent } from './ucf/ucf.component';

const routes: Routes = [


  {path: 'ucf' , component:UcfComponent},

  {path: '', redirectTo:'',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
