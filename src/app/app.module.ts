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
import { TestsComponent } from './tests/tests.component';
import { routes } from './app.routers';
import { ViewportService } from '../shared/services/viewport.service';
import { TaskModalComponent } from '../tasks/components/task-modal/task-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../shared/layout/footer/footer.component';


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
    FooterComponent,
    TestsComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),//, { useHash: false }),
    AngularFireModule.initializeApp(fbConfig, fbAuthConfig),
    TasksModule,
    AuthModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ViewportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
