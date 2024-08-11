import { Component, inject, OnInit } from '@angular/core';
import { AuthResponse } from '../../../../core/models/auth-response';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.page.html',
  styleUrl: './welcome.page.scss'
})
export class WelcomePage implements OnInit{
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  protected user!: AuthResponse;
  
  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['login']);
  }
}
