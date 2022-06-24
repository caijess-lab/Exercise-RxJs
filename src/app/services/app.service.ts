import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, map, of, tap } from 'rxjs';
import { Post } from '../models/post';
import { Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable()
export class AppService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  todos$ = this.http.get<Todo[]>(this.todosUrl).pipe(
    tap((data) => {
      console.log('TodoService : ');
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );

  users$ = this.http.get<User[]>(this.usersUrl).pipe(
    tap((data) => {
      data.length = 10;
    }),
    catchError(() => of([]))
  );

  posts$ = this.http.get<Post[]>(this.postsUrl).pipe(
    tap((data) => {
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );

  // combinaison des users dans todos
  todosWithUsers$ = combineLatest([this.todos$, this.users$]).pipe(
    map(([todos, users]) => {
      return todos.map(
        (t) =>
          ({
            ...t,
            userId: users.find((u) => t.userId === u.id).name,
          } as unknown as Todo)
      );
    }),
    tap((data) => console.table(data))
  );

  // on veut ranger chaque todos par user
  usersWithTodos$ = combineLatest([this.users$, this.todos$]).pipe(
    map(([users, todos]) => {
      return users.map(
        (u) =>
          ({
            ...u,
            todos: todos.filter((t) => t.userId === u.id),
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('test');
      console.table(data);
    })
  );

  // on veut ranger chaque todos par user et ajouter leurs posts
  usersWithTodosAndPosts$ = combineLatest([
    this.usersWithTodos$,
    this.posts$,
  ]).pipe(
    map(([usersTodos, posts]) => {
      return usersTodos.map(
        (u) =>
          ({
            ...u,
            posts: posts.filter((p) => p.userId === u.id),
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('posts');
      console.table(data);
    })
  );
}
