import { Component } from '@angular/core';

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
export class Post {}
