import { QuienesSomosComponent } from './../quienes-somos/quienes-somos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  /* {
    path:'quienes-somos',component:QuienesSomosComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
