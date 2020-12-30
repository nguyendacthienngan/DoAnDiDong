import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTimeoffComponent } from './my-timeoff.component'


import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent} from './create/create.component'
import { CreateModule} from './create/create.module'

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [MyTimeoffComponent],
  imports: [
    CommonModule,
    
    MatIconModule,
    BsDropdownModule,
    MatDialogModule,
    CreateModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MyTimeoffComponent,
  ],
  entryComponents: [
    CreateComponent
  ],
  providers: [  
    MatDatepickerModule,  
  ],

})
export class MyTimeoffModule { }
