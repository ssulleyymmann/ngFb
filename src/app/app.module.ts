import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TasksModule } from '../tasks/index';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';



const fbConfig = {
  apiKey: "AIzaSyB5ybQVnAyiUgw84t8PBBwRYPPT44wsXaw",
  authDomain: "ngfb-44987.firebaseapp.com",
  databaseURL: "https://ngfb-44987.firebaseio.com",
  storageBucket: "ngfb-44987.appspot.com",
  messagingSenderId: "498586561793"
};

const fbAuthConfig  = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([], {useHash: false}),
    AngularFireModule.initializeApp(fbConfig, fbAuthConfig ),
    TasksModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
