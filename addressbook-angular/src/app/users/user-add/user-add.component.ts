import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user = new User();

  constructor(
    protected userService: UserService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  createUser() {
    // TODO Unsubscribe
    this.userService.create$(this.user).subscribe((user) => {
      this.router.navigate(['users', user.id]);
      this.userService.events$.emit('refresh');
    });
  }
}
