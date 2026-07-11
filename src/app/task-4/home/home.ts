import { Component, effect, signal } from '@angular/core';
import { Header } from '../header/header';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { ProductCatelog } from '../../product-catelog/product-catelog';

export interface HeaderContent {
  title: string;
  directUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [Header, RouterOutlet, Footer, ProductCatelog],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  navBarcontent = signal<HeaderContent[]>([]);

  headerItems: HeaderContent[] = [
    {
      title: 'about',
      directUrl: 'about',
    },
    {
      title: 'service',
      directUrl: 'service',
    },
    {
      title: 'contact',
      directUrl: 'contact',
    },
  ];

  isHomePage = signal<boolean>(false);

  constructor(router: Router) {
    // set initial value based on current URL
    this.isHomePage.set(router.url === '/' || router.url === '');

    // update when navigation ends
    router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const url = ev.urlAfterRedirects || ev.url;
        this.isHomePage.set(url === '/' || url === '');
      }
    });

    console.log(router.config);

    effect(() => {
      this.navBarcontent.set(this.headerItems);
    });
  }
}
