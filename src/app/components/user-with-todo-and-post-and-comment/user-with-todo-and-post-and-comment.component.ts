import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-with-todo-and-post-and-comment',
  templateUrl: './user-with-todo-and-post-and-comment.component.html',
  styleUrls: ['./user-with-todo-and-post-and-comment.component.css'],
})
export class UserWithTodoAndPostAndCommentComponent extends BaseComponent {
  usersWithTodosAndPostsAndComments$ =
    this.appService.usersWithTodosAndPostsAndComments$;
  constructor(public appService: AppService, router: Router) {
    super(router, appService);
  }
}
