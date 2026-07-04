import { Injectable, signal } from '@angular/core';

interface User {
  userName: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  userDetail = signal<User | null>(null);

  handleLogin(userName: string, role: 'admin' | 'user'): void {
    this.userDetail.set({ userName, role });
  }

  handleLogout(): void {
    this.userDetail.set(null);
  }

  isUser(): boolean {
    return this.userDetail() != null;
  }

  isAdmin(): boolean {
    return this.userDetail()?.role === 'admin';
  }
}
