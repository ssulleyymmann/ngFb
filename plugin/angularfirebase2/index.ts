import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods } from 'angularfire2';


var fbConfig = {
    apiKey: "AIzaSyB5ybQVnAyiUgw84t8PBBwRYPPT44wsXaw",
    authDomain: "ngfb-44987.firebaseapp.com",
    databaseURL: "https://ngfb-44987.firebaseio.com",
    storageBucket: "ngfb-44987.appspot.com",
    messagingSenderId: "498586561793"
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

export class AngularFirebase2Module {}
