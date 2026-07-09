import { Component, effect, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderContent } from '../home/home';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navBarcontent = input<HeaderContent[]>([]);
}
