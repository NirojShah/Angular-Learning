import { Component, signal } from '@angular/core';
import { Store } from '../core/store/store';
import { UserStore } from '../core/user/user.store';

@Component({
  selector: 'app-signals-with-store',
  imports: [],
  templateUrl: './signals-with-store.html',
  styleUrl: './signals-with-store.css',
})
export class SignalsWithStore {
  constructor(
    public counterStore: Store,
    public userStore: UserStore,
  ) {}
}
