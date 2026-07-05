import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface User {
  userName: string;
  phone: number;
  email: string;
  city: string;
  state: string;
  country: string;
  password: string;
}

@Component({
  selector: 'app-form-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-task.html',
  styleUrl: './form-task.css',
})
export class FormTask {
  userDetails = signal<User | null>(null);

  formData: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formData = this.fb.group({
      userName: [''],
      phone: [null],
      email: [''],
      city: [''],
      state: [''],
      country: [''],
      password: [''],
    });

    this.formData.valueChanges.subscribe((value) => {
      this.userDetails.set(value as User);
    });
  }

  handleReset(): void {
    this.formData.reset();
    this.userDetails.set(null);
  }

  handleSubmit(): void {
    console.log({
      userDetails: this.userDetails(),
    });
  }
}
