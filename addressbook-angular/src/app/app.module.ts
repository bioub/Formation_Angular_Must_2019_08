import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
// import { UsersModule } from './users/users.module';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ApiBaseUrlInterceptor } from './core/api-base-url.interceptor';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localeFrSN from '@angular/common/locales/fr-SN';
import localeFrSNExtra from '@angular/common/locales/extra/fr-SN';
import { SelectModule } from 'must-components';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
registerLocaleData(localeFrSN, 'fr-SN', localeFrSNExtra);

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // UsersModule,
    AppRoutingModule,
    SharedModule,
    SelectModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: ApiBaseUrlInterceptor,
    }
    // { provide: UserService, useClass: UserService },
    // equivalent :
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
