import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { TasksModule } from '../tasks/index';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AuthModule } from '../auth/index';



const fbConfig = {

  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""

};

// const fbAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }



const fbAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([], { useHash: false }),
    AngularFireModule.initializeApp(fbConfig, fbAuthConfig),
    TasksModule,
    AuthModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
