import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-with-todo-and-post-and-comment',
  templateUrl: './user-with-todo-and-post-and-comment.component.html',
  styleUrls: ['./user-with-todo-and-post-and-comment.component.css'],
})
export class UserWithTodoAndPostAndCommentComponent {
  usersWithTodosAndPostsAndComments$ =
    this.appService.usersWithTodosAndPostsAndComments$;
  constructor(public appService: AppService) {}
}
