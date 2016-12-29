import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { TestModule } from './test/index';
import { TasksModule } from './tasks/index';
import { AuthModule } from './auth/index';
import { DashboardModule } from './dashboard/index';
import { CoreSite } from './_core/core-site';
import { NativeModule } from './native/index';


@NgModule({
    imports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        NativeModule,
        TestModule
    ],
    exports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        NativeModule,
        TestModule
    ],
    declarations: [
        // FooterComponent,
        // TestsComponent,
        // TaskModalComponent
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