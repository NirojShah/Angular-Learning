import { Routes } from '@angular/router';
import { Home } from './home/home';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { ProfilePage } from './profile-page/profile-page';
import { Dashboard } from './nested-route/dashboard/dashboard';
import { Profile } from './nested-route/profile/profile';
import { About } from './nested-route/about/about';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePage,
  // },
  // {
  //   path: 'about',
  //   component: AboutPage,
  // },
  // {
  //   path: 'contact',
  //   component: ContactPage,
  // },
  // {
  //   path: 'profile',
  //   component: ProfilePage,
  // },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'about',
        component: About,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
