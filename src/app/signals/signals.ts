import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [JsonPipe],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  // Without Signal
  count: number = 1;
  name: string = 'without signal';

  // With Signal
  count1 = signal<number>(1);
  name1 = signal<string>('with signal');

  increment(useSignal: boolean): void {
    if (!useSignal) {
      // Normal variable update
      this.count++;
    } else {
      // Signal update
      this.count1.update((value) => value + 1);
    }
  }

  jsonUser: object = {
    name: 'Niroj',
    age: '18',
    phone: '9366770826',
  };
}
