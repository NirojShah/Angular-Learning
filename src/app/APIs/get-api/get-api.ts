import { Component, inject, OnInit, signal } from '@angular/core';
import { User, UserType } from '../user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {
  usersData = signal<UserType[]>([]);
  
  constructor(private userService: User) {}
  
  // Normal Method to get the data - [old method]
  ngOnInit(): void {
    this.userService.getUser().subscribe((data: UserType[]) => {
      this.usersData.set(data);
    });
  }
  
  // This is the another way to get the userData
  // userService2 = inject(User);
  // userData2 = toSignal<UserType[]>(this.userService2.getUser());
}
