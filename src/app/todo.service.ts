import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  urlTodos = 'https://jsonplaceholder.typicode.com/todos';

  todos$ = this.httpClient.get<Todo[]>(this.urlTodos).pipe(
    tap((data) => {
      console.log('TodoService : ');
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );
}
