import { Component, inject } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title: string = 'Login Page';
  auth = inject(Auth);
  router = inject(Router);

  Login(): void {
    this.auth.login();
  }
}
