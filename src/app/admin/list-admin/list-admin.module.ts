import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { ListAdminComponent } from './list-admin.component';



@NgModule({
  declarations: [
    CrudAdminComponent,
    ListAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListAdminModule { }
