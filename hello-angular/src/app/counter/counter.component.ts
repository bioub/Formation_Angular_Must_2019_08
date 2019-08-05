import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count = 0;
  @Input() step = 1;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count += this.step;
  }

}
