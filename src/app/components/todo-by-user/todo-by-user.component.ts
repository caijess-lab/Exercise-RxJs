import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-todo-by-user',
  templateUrl: './todo-by-user.component.html',
  styleUrls: ['./todo-by-user.component.css'],
})
export class TodoByUserComponent {
  todosWithUsers$ = this.appService.todosWithUsers$;
  constructor(public appService: AppService) {}
}
