import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component'
import { HomeRoutingModule } from './pages/home/home-routing.module'
import { StartComponent } from './components/start/start.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  /* {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
    ],
  }, */
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'quienes-somos',
   /*  StartComponent */
    component: QuienesSomosComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
