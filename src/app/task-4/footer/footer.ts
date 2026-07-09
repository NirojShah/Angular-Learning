import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { HeaderContent as LinkType } from '../home/home';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  navItems = input<LinkType[]>([])
}
