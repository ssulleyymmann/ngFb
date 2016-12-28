import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in';
import { AuthGuard } from './guards/auth-guard';
import { UnauthGuard } from './guards/unauth-guard';
import { AuthService } from './services/auth-service';
import { CoreModule } from '../_core/core-module';
import { AngularFirebase2Module } from '../angularfirebase2/index';
import { AngularFireModule } from 'angularfire2';


const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [UnauthGuard] }
];


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AngularFirebase2Module,
    RouterModule.forChild(routes)
  ],
  exports: [AngularFireModule],
  providers: [
    AuthGuard,
    AuthService,
    UnauthGuard
  ]
})

export class AuthModule { }

export { AuthGuard };
export { AuthService };
export { UnauthGuard };
