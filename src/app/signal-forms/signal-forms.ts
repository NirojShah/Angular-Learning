import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

interface SignupType {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  about: string;
}

@Component({
  selector: 'app-signal-forms',
  // no runtime imports required
  templateUrl: './signal-forms.html',
  styleUrls: ['./signal-forms.css'],
})
export class SignalForms {
  userInp = signal<SignupType>({
    about: '',
    email: '',
    fullName: '',
    password: '',
    phone: '',
  });

  signupForm = form(this.userInp);

  onSubmit(): void {
    console.log(this.userInp());
  }
}
