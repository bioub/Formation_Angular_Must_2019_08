import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SelectModule } from 'must-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SelectModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
