import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class EventComponent {
  count: number = 0;
  increment(): void {
    this.count++;
  }
  decrement(): void {
    this.count--;
  }

  update(increment: boolean): void {
    if (increment) {
      this.count++;
      return;
    }
    this.count--;
    return;
  }


  checkEvent(e: Event): void{
    console.log(e)
  }


  userName: string = "";
  
  handleChange(val: string): void{
    this.userName = val;
  }
}
