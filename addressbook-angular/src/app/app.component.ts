import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    protected router: Router,
    protected title: Title,
  ) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    ).subscribe((event: ActivationEnd) => {
      const titleText = event.snapshot.data.title || 'AddressBook';
      this.title.setTitle(titleText);
    });
  }
}
