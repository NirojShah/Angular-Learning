import { Component, inject, signal } from '@angular/core';
import { User } from '../../APIs/user';

interface UserSignup {
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
  password: string;
  email: string;
}

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  userService = inject(User);
  userSignal = signal<UserSignup | null>(null);

  handleSubmit(): void {
    try {
      this.userService.postUser(this.userSignal()).subscribe({
        next: (resp) => {
          
        },
        error: (err) => {},
      });
    } catch (err) {}
  }
}
