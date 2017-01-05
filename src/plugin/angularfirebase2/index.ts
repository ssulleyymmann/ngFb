import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods } from 'angularfire2';


var fbConfig = {
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

  ],
  imports: [
    AngularFireModule.initializeApp(fbConfig, fbAuthConfig),
  ],
  providers: [

  ]
})

export class AngularFirebase2Module { }
