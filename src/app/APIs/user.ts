import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}

export interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  private httpMethod = inject(HttpClient);

  getUser() {
    return this.httpMethod.get<UserType[]>(this.apiUrl);
  }

  postUser(body: any) {
    return this.httpMethod.post(this.apiUrl, body);
  }

  patchUser(body: any) {
    return this.httpMethod.patch(this.apiUrl, body);
  }

  deleteUser(id: number) {
    return this.httpMethod.delete(`this.apiUrl/${id}`);
  }
}
