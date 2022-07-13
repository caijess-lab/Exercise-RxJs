import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-with-todo-and-post',
  templateUrl: './user-with-todo-and-post.component.html',
  styleUrls: ['./user-with-todo-and-post.component.css'],
})
export class UserWithTodoAndPostComponent extends BaseComponent {
  usersWithTodosAndPosts$ = this.appService.usersWithTodosAndPosts$;
  constructor(public appService: AppService, router: Router) {
    super(router, appService);
  }
}
