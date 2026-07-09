import { Component, input, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HeaderContent as LinkType } from '../home/home';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  navItems = input<LinkType[]>([])
}
