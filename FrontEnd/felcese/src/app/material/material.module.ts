import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'

import { MatSidenavModule} from '@angular/material/sidenav'

import { MatIconModule } from '@angular/material/icon'

import { MatFormFieldModule } from '@angular/material/form-field'

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button'

import {MatInputModule} from '@angular/material/input'

import {MatTabsModule} from '@angular/material/tabs';

import {TextFieldModule} from '@angular/cdk/text-field';

import {MatStepperModule} from '@angular/material/stepper';

import {MatRadioModule} from '@angular/material/radio';

import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[MatToolbarModule , MatSidenavModule, MatIconModule, MatFormFieldModule,

    MatCardModule,MatButtonModule,MatInputModule,MatTabsModule,TextFieldModule,MatStepperModule,
    
    MatRadioModule,MatMenuModule]
})
export class MaterialModule { }
