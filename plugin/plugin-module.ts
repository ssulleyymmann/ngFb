import { NgModule } from '@angular/core';
import { TestModule } from './test/index';
import { TasksModule } from './tasks/index';
import { AuthModule } from './auth/index';
import { DashboardModule } from './dashboard/index';

@NgModule({
    imports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        TestModule
    ],
    exports: [
        TasksModule,
        AuthModule,
        DashboardModule,
        TestModule
    ],
    declarations: [
        // FooterComponent,
        // TestsComponent,
        // TaskModalComponent
    ],
    providers: [],
    entryComponents: []

})
export class PluginModule { 
    
}