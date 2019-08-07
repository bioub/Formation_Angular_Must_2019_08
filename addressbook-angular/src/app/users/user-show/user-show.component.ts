import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    protected title: Title,
  ) { }

  ngOnInit() {
    // |----3-------------5--1--------------------9-------
    // switchMap((params) => this.userService.getById$(params.id))
    // |-----------{id:3}--------{id:1}-------

    // Avec le ReplaySubject (met en cache 1 valeur)
    // this.user$ = new ReplaySubject(1);
    // const user$ = this.activatedRoute.params.pipe(
    //   switchMap((params) => this.userService.getById$(params.id))
    // );
    // user$.subscribe(this.user$);

    this.user$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.userService.getById$(params.id)),
      tap((user) => this.title.setTitle(`${user.name} - AddressBook`)),
    );
  }

}
