import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserFormSimpleComponent } from './user-form-simple/user-form-simple.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { RemoteLoaderComponent } from './remote-loader/remote-loader.component';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UserFormSimpleComponent,
    UserCardsComponent,
    RemoteLoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedLibModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/demo', pathMatch: 'full' },
      { path: 'demo', component: DemoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }