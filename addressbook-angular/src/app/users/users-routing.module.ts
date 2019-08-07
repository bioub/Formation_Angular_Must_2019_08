import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { AuthGuard } from '../core/auth.guard';


const routes: Routes = [{
  path: '',
  component: UsersComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [{
    path: 'add',
    component: UserAddComponent,
  }, {
    path: ':id',
    component: UserShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
