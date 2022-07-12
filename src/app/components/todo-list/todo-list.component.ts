import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos$ = this.appService.todos$;
  constructor(public appService: AppService) {}
}
