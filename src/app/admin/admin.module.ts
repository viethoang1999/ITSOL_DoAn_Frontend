import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuanlytuyendungComponent } from './Quanlytuyendung/quanlytuyendung.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { FileComponent } from './file/file.component';


const routes: Routes = [
  {
    path: '',
    component:AdminComponent,
    children: [
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'contact',
        component:ContactComponent,
      },
      {
        path: 'Quanlytuyendung',
        loadChildren: () => import('./Quanlytuyendung/quanlytuyendung.module').then(m => m.QuanlytuyendungModule),
      },
      {
        path: 'file',
        loadChildren: () => import('./file/file.module').then(m => m.FileModule),
      },
      {
        path: 'list-admin',
        loadChildren: () => import('./list-admin/list-admin.module').then(m => m.ListAdminModule),
      }
    ]
  }
];

@NgModule({
  declarations: [
    ContactComponent,
    DashboardComponent,
    QuanlytuyendungComponent,
    ListAdminComponent,
    FileComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class AdminModule { }
