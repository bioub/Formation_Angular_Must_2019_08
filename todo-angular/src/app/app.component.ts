import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [{
    id: 123,
    completed: false,
    title: 'Acheter du pain',
  }, {
    id: 456,
    completed: true,
    title: 'Introduire Angular',
  }];

  ngOnInit() {

  }

  addTodo(todo) {
    // const newTodos = this.todos.slice();
    // newTodos.push(todo);

    // this.todos = newTodos;
    this.todos = [...this.todos, todo];
  }
}
