import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}
  urlUser = 'https://jsonplaceholder.typicode.com/users';
  users$ = this.httpClient.get<User[]>(this.urlUser).pipe(
    tap((data) => {
      console.log('UserService: ');
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );
}
