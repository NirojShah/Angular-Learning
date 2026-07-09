import { Component, effect, signal } from '@angular/core';
import { Header } from '../header/header';
import {  RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';

export interface HeaderContent {
  title: string;
  directUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [Header, RouterOutlet, Footer],
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

  constructor() {
    effect(() => {
      this.navBarcontent.set(this.headerItems);
    });
  }
}
