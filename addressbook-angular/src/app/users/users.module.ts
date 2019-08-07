import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserShowComponent,
    UserAddComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
