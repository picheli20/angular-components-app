import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterModule } from '../../node_modules/angular-components-lib/dist/counter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
