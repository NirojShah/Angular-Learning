import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-card-component',
  imports: [CommonModule],
  templateUrl: './custom-card-component.html',
  styleUrl: './custom-card-component.css',
})
export class CustomCardComponent {
  title = input<string>();
  description = input<string>();
  date = input<Date>();
  status = input<boolean>();
  click = input<() => void>();
}
