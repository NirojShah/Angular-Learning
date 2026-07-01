import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-input-using-signals',
  imports: [],
  templateUrl: './input-using-signals.html',
  styleUrl: './input-using-signals.css',
})
export class InputUsingSignals {
  parentvalue = input<string>(''); // This is the input property that will receive the value from the parent component
  childValue = signal<string>(''); // This is the signal that will hold the value entered in the input field
}
