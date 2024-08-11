import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage {
  protected username: string = '';
  protected password: string = '';

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  async login() {
    try {
      const authResponse = await this._authService.login({ username: this.username, password: this.password })
      localStorage.setItem('authToken', authResponse.token);
      localStorage.setItem('user', JSON.stringify(authResponse));
      this._router.navigate(['private']);
    } catch (error) {
      alert('Credenciales inválidas');
    }
  }
  
}
