
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth';
import { DashboardComponent, ScienceJoke, ScienceJoke2 } from './components/dashboard';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/core-module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    DashboardComponent,
    ScienceJoke,
    ScienceJoke2
  ],
  imports: [
    CommonModule,
    CoreModule,
    DragulaModule,
    FlexLayoutModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [FlexLayoutModule],
  providers: [

  ],
  entryComponents: [
    ScienceJoke,
    ScienceJoke2

  ],
})

export class DashboardModule { }


