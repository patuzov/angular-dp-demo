import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://api.github.com/users', 
      {headers: this.headers});


    // return [{
    //   username: 'User1',
    //   email: 'user@company.com'
    // },
    // {
    //   username: 'User2',
    //   email: 'use2@company.com'
    // },
    // {
    //   username: 'User3',
    //   email: 'user3@company.com'
    // }];
  }
}
