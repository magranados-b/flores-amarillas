import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dedicatoria',
    loadComponent: () => import('./home/home.component'),
  },
    {
    path: '**',
    redirectTo: 'dedicatoria'
  }
];
