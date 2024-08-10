import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'private',
    loadChildren: () => import('./modules/private/private.routes').then(m => m.PRIVATE_ROUTES)
  },
];
