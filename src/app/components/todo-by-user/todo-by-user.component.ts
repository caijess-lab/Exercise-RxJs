import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-todo-by-user',
  templateUrl: './todo-by-user.component.html',
  styleUrls: ['./todo-by-user.component.css'],
})
export class TodoByUserComponent extends BaseComponent {
  todosWithUsers$ = this.appService.todosWithUsers$;
  constructor(public appService: AppService, public router: Router) {
    super(router, appService);
  }
}
