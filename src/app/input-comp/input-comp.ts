import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-comp',
  imports: [],
  templateUrl: './input-comp.html',
  styleUrl: './input-comp.css',
})
export class InputComp {
  label = input<string>();
  type = input<string>();
  placeHolder = input<string>();
  change = output<string>();

  handleChange(value: string): void {
    this.change.emit(value);
  }
}
