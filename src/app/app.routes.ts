import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flores',
    loadComponent: () => import('./home/home.component'),
  },
    {
    path: '**',
    redirectTo: 'flores'
  }
];
