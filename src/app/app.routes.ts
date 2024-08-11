import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES),
    canActivate: [LoginGuard],
  },
  {
    path: 'private',
    loadChildren: () => import('./modules/private/private.routes').then(m => m.PRIVATE_ROUTES),
    canActivate: [AuthGuard],
  },
];
