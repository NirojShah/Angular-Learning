import { Routes } from '@angular/router';
// import { Home as Home1 } from './home/home';
// import { HomePage } from './home-page/home-page';
// import { AboutPage } from './about-page/about-page';
// import { ContactPage } from './contact-page/contact-page';
// import { ProfilePage } from './profile-page/profile-page';
// import { Dashboard } from './nested-route/dashboard/dashboard';
// import { Profile } from './nested-route/profile/profile';
import { Home } from './task-4/home/home';
import { Contact } from './task-4/contact/contact';
import { Services } from './task-4/services/services';
import { About } from './task-4/about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './auth-guard';
import { Login } from './login/login';

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
  // {
  //   path: 'dashboard',
  //   component: Dashboard,
  //   children: [
  //     {
  //       path: 'profile',
  //       loadComponent: () => import('./nested-route/profile/profile').then((m) => m.Profile),
  //     },
  //     {
  //       path: 'about',
  //       loadComponent: () => import('./nested-route/about/about').then((m) => m.About),
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },

  // Task 4 Routing for header and Footer.
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'about',
        component: About,
        canActivate: [authGuard],
      },
      {
        path: 'service',
        component: Services,
        canActivate: [authGuard],
      },
      {
        path: 'contact',
        component: Contact,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
