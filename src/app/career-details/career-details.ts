import { Component } from '@angular/core';
import { Opportunities } from '../career-page/career-page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-details',
  imports: [],
  templateUrl: './career-details.html',
  styleUrl: './career-details.css',
})
export class CareerDetails {
  opportunityDetail: Opportunities | null = null;

  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe((path) => {
      const opportunityObj: Opportunities = {
        id: path.get('id') ? parseInt(path.get('id')!) : 0,
        description: path.get('description') || '',
        location: path.get('location') || '',
        // ensure mode is one of the allowed literal types
        mode: ((): 'remote' | 'hibrid' | 'wfo' => {
          const m = path.get('mode');
          return m === 'hibrid' || m === 'wfo' || m === 'remote' ? m : 'remote';
        })(),
        package: path.get('package') || '',
        requiredExp: Number(path.get('requiredExp')) || 0,
        title: path.get('title') || '',
      };

      this.opportunityDetail = opportunityObj;
    });
  }
}
