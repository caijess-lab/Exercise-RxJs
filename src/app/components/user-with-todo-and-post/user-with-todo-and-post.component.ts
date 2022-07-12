import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-with-todo-and-post',
  templateUrl: './user-with-todo-and-post.component.html',
  styleUrls: ['./user-with-todo-and-post.component.css'],
})
export class UserWithTodoAndPostComponent {
  usersWithTodosAndPosts$ = this.appService.usersWithTodosAndPosts$;
  constructor(public appService: AppService) {}
}
