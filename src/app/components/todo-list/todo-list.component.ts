import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent extends BaseComponent {
  todos$ = this.appService.todos$;
  constructor(public appService: AppService, router: Router) {
    super(router, appService);
  }
}
