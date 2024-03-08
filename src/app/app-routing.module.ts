import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'session',
    loadChildren: () => import('./components/session/sesion.module').then((m) => m.SesionModule),
  },
  {
    path: 'grid',
    loadChildren: () => import('./components/grid/grid.module').then((m) => m.GridModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'recovery',
    loadChildren: () => import('./components/recovery/recovery.module').then((m) => m.RecoveryModule),
  },
  {
    path: '',
    redirectTo: 'session',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
