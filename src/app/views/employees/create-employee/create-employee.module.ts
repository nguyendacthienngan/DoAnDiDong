import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateEmployeeComponent } from './create-employee.component'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule} from '@angular/material/select';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"


@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    BsDropdownModule,
    RxReactiveFormsModule,
  ],
  entryComponents: [
    CreateEmployeeComponent,
  ],
  
})
export class CreateEmployeeModule { }
