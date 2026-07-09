import { Component, effect, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderContent } from '../home/home';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navBarcontent = input<HeaderContent[]>([]);
}
