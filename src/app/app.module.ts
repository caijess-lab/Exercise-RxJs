import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoByUserComponent } from './components/todo-by-user/todo-by-user.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserWithTodoAndPostComponent } from './components/user-with-todo-and-post/user-with-todo-and-post.component';
import { UserWithTodoAndPostAndCommentComponent } from './components/user-with-todo-and-post-and-comment/user-with-todo-and-post-and-comment.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { TableauInsertComponent } from './components/tableau-insert/tableau-insert.component';
import { UserByTodoComponent } from './components/user-by-todo/user-by-todo.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'todosWithUsers', component: TodoByUserComponent },
  { path: 'usersWithTodos', component: UserByTodoComponent },
  { path: 'usersWithTodosAndPosts', component: UserWithTodoAndPostComponent },
  {
    path: 'usersWithTodosAndPostsAndComments',
    component: UserWithTodoAndPostAndCommentComponent,
  },
  {
    path: 'tableauinsert',
    component: TableauInsertComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TodoListComponent,
    UserListComponent,
    TodoByUserComponent,
    UserWithTodoAndPostComponent,
    UserWithTodoAndPostAndCommentComponent,
    AccueilComponent,
    TableauInsertComponent,
    UserByTodoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AppService],
  exports: [RouterModule],
})
export class AppModule {}
