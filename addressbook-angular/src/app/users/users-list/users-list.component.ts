import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Subscription, Observable } from 'rxjs';
import { UserService } from '../user.service';
import { filter, startWith, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // users: User[];
  // subcription: Subscription;

  // constructor(protected httpClient: HttpClient) { }

  // ngOnInit() {
  //   this.subcription = this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users) => {
  //       this.users = users;
  //     });
  // }

  // ngOnDestroy() {
  //   this.subcription.unsubscribe();
  // }

  users$: Observable<User[]>;

  constructor(protected userService: UserService) { }

  ngOnInit() {
    // |-------d---------g--------e-r------f---r----s-r---
    // filter((event) => event === 'refresh'),
    // |----------------------------r----------r------r---
    // startWith('refresh')
    // |r---------------------------r----------r------r------------
    // |-------[]------------------------[]--------------[]-----[]-
    // switchMapTo(this.userService.getAll$())
    // |-------[]------------------------[]---------------------[]-
    this.users$ = this.userService.events$.pipe(
      filter((event) => event === 'refresh'),
      startWith('refresh'),
      switchMapTo(this.userService.getAll$()),
    );
  }

}
