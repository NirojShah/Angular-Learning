import { Component, effect, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface Opportunities {
  id: number;
  title: string;
  requiredExp: number;
  location: string;
  package: string;
  mode: 'remote' | 'hibrid' | 'wfo';
  description: string;
}

@Component({
  selector: 'app-career-page',
  imports: [],
  templateUrl: './career-page.html',
  styleUrl: './career-page.css',
})
export class CareerPage {
  opportunities = signal<Opportunities[]>([]);

  staticOpportunities: Opportunities[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      location: 'Bengaluru',
      mode: 'hibrid',
      package: '6LPA - 8LPA',
      requiredExp: 3,
      description:
        'We are looking for a Full Stack Developer who can build end-to-end web solutions with confidence. You will work on both the frontend and backend, collaborate with product and design teams, and help improve performance, scalability, and user experience across a modern product suite.',
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      location: 'Remote',
      mode: 'remote',
      package: '4.5LPA - 6LPA',
      requiredExp: 2,
      description:
        'The Frontend Engineer role is ideal for someone passionate about crafting intuitive interfaces and delivering smooth user experiences. You will translate design concepts into responsive, high-performance web pages, optimize interactions, and work closely with developers and designers to shape the product experience.',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      location: 'Hyderabad',
      mode: 'wfo',
      package: '7LPA - 9LPA',
      requiredExp: 4,
      description:
        'As a Backend Engineer, you will design robust APIs, build secure services, and ensure data flows efficiently behind the scenes. This role focuses on architecture, performance tuning, database design, and creating reliable systems that support business-critical applications at scale.',
    },
    {
      id: 4,
      title: 'Product Designer',
      location: 'Pune',
      mode: 'hibrid',
      package: '5LPA - 7LPA',
      requiredExp: 2,
      description:
        'The Product Designer will play a key role in shaping user-centered experiences from research to final implementation. You will create thoughtful interfaces, improve usability, and collaborate with cross-functional teams to turn complex ideas into simple and beautiful digital products.',
    },
  ];

  constructor(private router: Router) {
    effect(() => {
      this.opportunities.set(this.staticOpportunities);
    });
  }

  handleNavigate(id: number): void {
    const opportunity: Opportunities | undefined = this.opportunities().find((val) => val.id == id);
    if (opportunity != undefined) {
      this.router.navigate(["career-details"],{queryParams: opportunity})
    }
  }
}