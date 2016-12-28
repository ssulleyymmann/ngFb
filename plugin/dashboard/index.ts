
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth';
import { MainComponent } from './components/main';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/core-module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [FlexLayoutModule],
  providers: [

  ]
})

export class DashboardModule { }


