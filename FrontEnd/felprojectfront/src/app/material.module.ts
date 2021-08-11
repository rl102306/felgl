import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'

import { MatSidenavModule} from '@angular/material/sidenav'

import { MatIconModule } from '@angular/material/icon'

import { MatFormFieldModule } from '@angular/material/form-field'

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button'

import {MatInputModule} from '@angular/material/input'

import {MatTabsModule} from '@angular/material/tabs';

import {TextFieldModule} from '@angular/cdk/text-field';



@NgModule({

exports:[MatToolbarModule , MatSidenavModule, MatIconModule, MatFormFieldModule,

    MatCardModule,MatButtonModule,MatInputModule,MatTabsModule,TextFieldModule]


})

export class MaterialModule{


}