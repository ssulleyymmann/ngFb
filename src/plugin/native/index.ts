
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/core-module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NativeComponent } from './components/native';

const routes: Routes = [
    { path: 'native', component: NativeComponent, canActivate: [AuthGuard] }
];


@NgModule({
    declarations: [
        NativeComponent
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

export class NativeModule { }


