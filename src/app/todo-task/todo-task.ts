import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  imports: [],
  templateUrl: './todo-task.html',
  styleUrl: './todo-task.css',
})
export class TodoTask {
  errorMessage = signal<string>('orange');
  todoCurrent = signal<string>('');
  todoLists = signal<{ title: string; status: boolean }[]>([]);

  addTodo(todo: string): void {
    if (todo == '') {
      return;
    }
    this.todoLists.update((val) => [...val, { title: todo, status: false }]);
    this.todoCurrent.set('');
  }

  markAsComplete(itemNo: number): void {
    this.todoLists.update((val) =>
      val.map((val, index) => (index == itemNo ? { title: val.title, status: !val.status } : val)),
    );
  }

  deleteTask(itemNo: number): void {
    this.todoLists.update((val) => val.filter((val, index) => index != itemNo));
  }
}
