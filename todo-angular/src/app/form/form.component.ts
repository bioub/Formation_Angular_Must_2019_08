import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // preserveWhitespaces: true,
})
export class FormComponent implements OnInit {

  @Input() value = '';
  @Output() todoAdd = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  add(event: Event) {
    // event.preventDefault();
    this.todoAdd.emit({id: Math.random(), completed: false, title: this.value});
  }
}
