import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { ModalsComponent } from './modals.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule
  ],
  entryComponents: [
    ModalsComponent
  ],
})
export class ModalsModule { }
