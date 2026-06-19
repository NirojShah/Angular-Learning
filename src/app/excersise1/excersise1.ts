import { Component } from '@angular/core';

@Component({
  selector: 'app-excersise1',
  imports: [],
  templateUrl: './excersise1.html',
  styleUrl: './excersise1.css',
})
export class Excersise1 {
  count: number = 0;

  handleIncrement(): void {
    this.count++;
  }
  handleDecrement(): void {
    this.count--;
  }

  handleClick(sum: boolean): void {
    if (sum) {
      this.handleIncrement();
      return;
    }
    this.handleDecrement();
  }
}
