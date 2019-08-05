import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, DoCheck {


  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('detectChange item');
  }

}
