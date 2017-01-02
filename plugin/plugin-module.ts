import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestModule } from './test/index';
import { TasksModule } from './tasks/index';
import { AuthModule } from './auth/index';
import { DashboardModule } from './dashboard/index';
import { CoreSite } from './_core/core-site';
import { NativeModule } from './native/index';
import { CoreComponent } from './_core/core-component';
import {CoreRoutes} from './_core/core-routers'

@NgModule({
    bootstrap: [CoreComponent],
    imports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        NativeModule,
        TestModule,
        RouterModule.forRoot(CoreRoutes, { useHash: false })
    ],
    exports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        NativeModule,
        TestModule
    ],
    declarations: [
        CoreComponent
    ],
    providers: [CoreSite],
    entryComponents: []
})

export class PluginModule {
    constructor(injector: Injector) {//appRef: ApplicationRef) {
        CoreSite.CORE_INJECTOR = injector;
        // CoreSite.CORE_INJECTOR1 = appRef;
    }

}