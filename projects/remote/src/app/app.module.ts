import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }