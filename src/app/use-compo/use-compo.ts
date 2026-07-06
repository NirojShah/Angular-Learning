import { Component, signal } from '@angular/core';
import { CustomCardComponent } from '../custom-card-component/custom-card-component';
import { ButtonComponent } from '../button-component/button-component';
import { InputComp } from '../input-comp/input-comp';
import { FormField } from '@angular/forms/signals';

interface Card {
  title: string;
  description: string;
  date: Date;
  status: boolean;
}

interface Button {
  label: string;
}

@Component({
  selector: 'app-use-compo',
  imports: [CustomCardComponent, ButtonComponent, InputComp, FormField],
  templateUrl: './use-compo.html',
  styleUrl: './use-compo.css',
})
export class UseCompo {
  cards = signal<Card[]>([]);
  button = signal<Button[]>([]);

  handleClick(index: number): void {
    console.log(`clicked - ${index}`);
  }
  insertData(): void {
    this.cards.set([
      {
        title: 'Card 1',
        description: 'This is the first card.',
        date: new Date(),
        status: true,
      },
      {
        title: 'Card 2',
        description: 'This is the second card.',
        date: new Date(),
        status: false,
      },
      {
        title: 'Card 3',
        description: 'This is the third card.',
        date: new Date(),
        status: true,
      },
    ]);

    this.button.set([
      {
        label: 'hrms',
      },
      {
        label: 'finance',
      },
      {
        label: 'sales',
      },
    ]);
  }

  handleButtonclick(msg: string): void {
    console.log(msg);
  }

  // Input handler.
  handleInputChangeComp(val: string): void {
    console.log({ val });
  }
}
