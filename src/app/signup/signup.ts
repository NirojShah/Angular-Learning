import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',

    templateUrl:"./signup.html",    //if you are using separate file for the HTML
    styleUrl: "./signup.css",       //if you are using separate fiel for the CSS

  // template: `<h1>Signup Works</h1>
  //   <h2>{{ title }}</h2>`,
  // styles: [
  //   `
  //     h1: {
  //       color: 'blue';
  //     }
  //   `,
  // ],
})
export class SignupComponent {
  title: string = 'Signup Page';
}


// NOTE - If you have multiple html then you can use Array [] in the templateUrl
// NOTE - If you have multiple css then you can use Array [] in the styleUrl