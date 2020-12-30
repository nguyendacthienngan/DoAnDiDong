import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTimeoffComponent } from './my-timeoff.component'


import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MyTimeoffComponent],
  imports: [
    CommonModule,
    
    MatIconModule,
    BsDropdownModule,
    MatDialogModule
  ],
  exports: [
    MyTimeoffComponent,
  ]

})
export class MyTimeoffModule { }
