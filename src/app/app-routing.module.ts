import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component'
import { HomeRoutingModule } from './pages/home/home-routing.module'
import { StartComponent } from './components/start/start.component'

const routes: Routes = [
  {
    path: '',
   /*  StartComponent */
    component: LayoutBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
