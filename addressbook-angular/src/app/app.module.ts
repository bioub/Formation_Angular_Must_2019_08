import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
import { UsersModule } from './users/users.module';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    // { provide: UserService, useClass: UserService },
    // equivalent :
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
