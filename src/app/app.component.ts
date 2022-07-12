import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // liste des todos
  todos$ = this.appService.todos$;

  // liste des users
  users$ = this.appService.users$;

  // combinaison des users dans todos
  todosWithUsers$ = this.appService.todosWithUsers$;

  // on veut ranger chaque todos par user
  usersWithTodos$ = this.appService.usersWithTodos$;

  // on veut ranger chaque todos par user et ajouter leurs posts
  usersWithTodosAndPosts$ = this.appService.usersWithTodosAndPosts$;

  // todos, posts et comments par user
  usersWithTodosAndPostsAndComments$ =
    this.appService.usersWithTodosAndPostsAndComments$;

  // menus
  menus = [
    {
      title: 'Liste des tâches',
      url: '/todos',
    },
    {
      title: 'Liste des utilisateurs',
      url: '/users',
    },
    {
      title: 'Liste des tâches par utilisateurs',
      url: '/todosWithUsers',
    },
    {
      title: 'Liste des utilisateurs par tâches',
      url: '/usersWithTodos',
    },
    {
      title: 'Liste des utilisateurs avec tâches et articles',
      url: '/usersWithTodosAndPosts',
    },
    {
      title: 'Liste des utilisateurs avec tâches, articles et commentaires',
      url: '/usersWithTodosAndPostsAndComments',
    },
  ];

  constructor(public appService: AppService) {}
}
