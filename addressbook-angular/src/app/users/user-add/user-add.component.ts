import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user = new User();

  constructor(protected userService: UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.create$(this.user).subscribe((user) => {
      // TODO Redirect Contact créé
      console.log(user);
    });
  }
}
