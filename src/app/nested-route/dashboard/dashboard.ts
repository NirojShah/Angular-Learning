import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isDashboard = signal<boolean>(true);
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('profile') || event.url.includes('about')) {
          this.isDashboard.set(false);
          return;
        }
        this.isDashboard.set(true);
      });
  }

  handleClick(): void {
    this.router.navigate(['/dashboard']);
  }
}
