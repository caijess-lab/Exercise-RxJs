import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-by-todo',
  templateUrl: './user-by-todo.component.html',
  styleUrls: ['./user-by-todo.component.css'],
})
export class UserByTodoComponent {
  usersWithTodos$ = this.appService.usersWithTodos$;
  constructor(public appService: AppService) {}
}
