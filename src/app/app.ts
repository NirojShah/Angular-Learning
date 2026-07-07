import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignupComponent } from './signup/signup';
import { BindingComponent } from './binding/binding';
import { EventComponent } from './event/event';
import { Excersise1 } from './excersise1/excersise1';
import { Datatype } from './datatype/datatype';
import { Pipeline } from './pipeline/pipeline';
import { Signals } from './signals/signals';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { TodoTask } from './todo-task/todo-task';
import { SignalTemplateBinding } from './signal-template-binding/signal-template-binding';
import { InputUsingSignals } from './input-using-signals/input-using-signals';
import { SignalsWithStore } from './signals-with-store/signals-with-store';
import { Store } from './core/store/store';
import { AngularForms } from './angular-forms/angular-forms';
import { FormTask } from './form-task/form-task';
import { UseCompo } from './use-compo/use-compo';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [
    Datatype,
    Login,
    SignupComponent,
    BindingComponent,
    EventComponent,
    EventComponent,
    Excersise1,
    Pipeline,
    Signals,
    TwoWayBinding,
    TodoTask,
    SignalTemplateBinding,
    InputUsingSignals,
    SignalsWithStore,
    AngularForms,
    FormTask,
    UseCompo,
    NavBar,
    RouterOutlet
],
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

  parentValue = signal<string>('');

  constructor(public counterStore: Store) {}
}
