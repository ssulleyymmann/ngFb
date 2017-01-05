
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/core-module';
import { TestComponent } from './components/test';

const routes: Routes = [
    { path: 'test', component: TestComponent }
];


@NgModule({
    exports: [],
    declarations: [
        TestComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(routes)
    ],
    providers: [
    ]
})

export class TestModule { }


