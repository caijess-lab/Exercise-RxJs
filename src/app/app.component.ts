import { Component, VERSION } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  datas: any = [];

  todos$ = this.todoService.todos$;

  users$ = this.userService.users$;

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
            todos: [todos.find((t) => t.userId === u.id)],
          } as unknown as User)
      );
    }),
    tap((data) => {
      console.log('test');
      console.table(data);
    })
  );

  constructor(
    public todoService: TodoService,
    public userService: UserService
  ) {}
}
