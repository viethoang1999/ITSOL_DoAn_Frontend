import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuanlytuyendungRoutingModule } from './quanlytuyendung-routing.module';
import { CrudQuanlytuyendungComponent } from './crud-quanlytuyendung/crud-quanlytuyendung.component';




@NgModule({
  declarations: [
    CrudQuanlytuyendungComponent,


  ],
  imports: [
    CommonModule,
    QuanlytuyendungRoutingModule
  ]
})
export class QuanlytuyendungModule { }
