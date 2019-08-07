import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    title: 'Welcome - AddressBook',
  }
},
{
  path: 'users',
  loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule),
  // data: {
  //   menu: {
  //     icon: 'fa fa-users',
  //     label: 'Users'
  //   }
  // }
},
{
  path: '**',
  component: NotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
