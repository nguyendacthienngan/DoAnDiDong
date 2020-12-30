import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component'
import { CreateModule } from './create/create.module'

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { EditModule } from './edit/edit.module'
import { EditComponent } from './edit/edit.component'
@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    NgbModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule,
    CreateModule,
    
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,

    MatNativeDateModule ,
    EditModule
  ],
  exports: [
    ManagerComponent
  ],
  entryComponents: [
    CreateComponent,
    EditComponent
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class ManagerModule { }
