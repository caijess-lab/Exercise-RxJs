import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../classes/base-component';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent extends BaseComponent {
  users$ = this.appService.users$;
  constructor(public appService: AppService, router: Router) {
    super(router, appService);
  }
}
