import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.page.html',
  styleUrl: './welcome.page.scss'
})
export class WelcomePage {
  protected user: any;
}
