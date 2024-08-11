import { Routes } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';

export const PRIVATE_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomePage },
]