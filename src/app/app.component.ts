import { Component, VERSION } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppService } from './services/app.service';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos$ = this.appService.todos$;

  users$ = this.appService.users$;

  // combinaison des users dans todos
  todosWithUsers$ = this.appService.todosWithUsers$;

  // on veut ranger chaque todos par user
  usersWithTodos$ = this.appService.usersWithTodos$;

  // on veut ranger chaque todos par user et ajouter leurs posts
  usersWithTodosAndPosts$ = this.appService.usersWithTodosAndPosts$;

  constructor(public appService: AppService) {}
}
