import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { ListAdminComponent } from './list-admin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'list-admin',
    component: ListAdminComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListAdminRoutingModule { }
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { QuanlytuyendungComponent } from './quanlytuyendung.component';


// const routes: Routes = [
//     {
//       path: '',
//       component:QuanlytuyendungComponent,

//     }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class QuanlytuyendungRoutingModule { }
