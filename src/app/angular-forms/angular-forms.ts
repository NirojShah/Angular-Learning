import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface UserInfo {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-angular-forms',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './angular-forms.html',
  styleUrl: './angular-forms.css',
})
export class AngularForms {
  // Template Driven Forms.
  userName = signal<string>('');
  password = signal<string>('');

  handleSubmit(): void {
    console.log(`User Name: ${this.userName()} , Password: ${this.password()}`);
  }

  // Reactive Forms.
  submitPressed = signal<boolean>(false);
  userDetails = signal<UserInfo | null>(null);
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userName: [''],
      password: [''],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      this.userDetails.set(value as UserInfo);
    });
  }

  handleReactiveSubmit(): void {
    this.submitPressed.set(true);
    console.log(
      `User Name: ${this.userDetails()?.userName} , Password: ${this.userDetails()?.password}`,
    );
  }
}
