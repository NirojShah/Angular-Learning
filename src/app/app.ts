import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
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
    this.currentTodo.set("")
  }

  testing(x: Event) {
    const value: string = (x.target as HTMLInputElement).value;
    this.currentTodo.set(value)
  }
}
