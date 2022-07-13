import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

export abstract class BaseComponent {
  protected title: string;
  constructor(protected router: Router, appService: AppService) {
    this.title = appService.menus.filter(
      (item) => item.url === router.url
    )[0].title;
  }
}
