import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanlytuyendungComponent } from './quanlytuyendung.component';


const routes: Routes = [
    {
      path: '',
      component:QuanlytuyendungComponent,

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanlytuyendungRoutingModule { }
