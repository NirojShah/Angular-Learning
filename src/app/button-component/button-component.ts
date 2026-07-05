import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
})
export class ButtonComponent {
  label = input<string>();
  onClick = output<string>();

  handleClick(): void {
    console.log('this is from child');
    this.onClick.emit('The button has clicked successfully.');
  }
}
