import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BaseModule } from './components/base/base.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
