import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',

  //   templateUrl:"/path", if you are using separate file for the HTML
  //   styleUrl: "/path",   if you are using separate fiel for the CSS

  template: `<h1>Signup Works</h1>
    <h2>{{ title }}</h2>`,
  styles: [
    `
      h1: {
        color: 'blue';
      }
    `,
  ],
})
export class SignupComponent {
  title: string = 'Signup Page';
}
