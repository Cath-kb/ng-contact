import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module'
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    // ErrorComponent,
    // AppComponent
  ],
  imports: [
    // NgModule,
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
