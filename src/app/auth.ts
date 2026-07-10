import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  loggedIn = signal<boolean>(false);
  rotuer = inject(Router);
  login(): void {
    this.loggedIn.set(true);
    this.rotuer.navigate(["/"])

  }

  logout(): void {
    this.loggedIn.set(false);
  }
}
