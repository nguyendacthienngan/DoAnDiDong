import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule} from '@angular/material/select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
//import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
 
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    BsDropdownModule,
    RxReactiveFormsModule,
    // DlDateTimeDateModule,
    // DlDateTimePickerModule
  ],
  entryComponents: [
    CreateComponent
  ],
})
export class CreateModule { }
