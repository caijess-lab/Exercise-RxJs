import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-by-todo',
  templateUrl: './user-by-todo.component.html',
  styleUrls: ['./user-by-todo.component.css'],
})
export class UserByTodoComponent extends BaseComponent {
  usersWithTodos$ = this.appService.usersWithTodos$;
  constructor(public appService: AppService, router: Router) {
    super(router, appService);
  }
}
