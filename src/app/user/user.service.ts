import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.getUsers().pipe(
      tap(x => console.log(x)),
      map(x => x.find(u => u.id == id))
    );
  }

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
