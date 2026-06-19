import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignupComponent } from './signup/signup';
import { BindingComponent } from './binding/binding';
import { EventComponent } from './event/event';
import { Excersise1 } from './excersise1/excersise1';

@Component({
  selector: 'app-root',
  imports: [Login, SignupComponent, BindingComponent, EventComponent, EventComponent, Excersise1],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = 'Niroj Shah';
  age: number = 35;
  ageInDays(age: number): number {
    return age * 365;
  }

  totalExperience = signal(3);

  increment(): void {
    this.totalExperience.update((val) => val + 1);
  }

  decrement(): void {
    this.totalExperience.update((val) => val - 1);
  }

  todos = signal(<string[]>[]);

  currentTodo = signal('');

  addItem(task: string): void {
    this.todos.update((val) => [...val, task]);
    this.currentTodo.set('');
  }

  testing(x: Event) {
    const value: string = (x.target as HTMLInputElement).value;
    this.currentTodo.set(value);
  }
}
