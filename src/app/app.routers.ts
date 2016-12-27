import { Routes } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { TasksComponent } from '../../plugin/tasks/components/tasks';
import { TaskModalComponent } from '../../plugin/tasks/components/task-modal/task-modal.component';




export const routes: Routes = [
    {
        path: 'tests', component: TestsComponent, children: [
            { path: ':id', component: TaskModalComponent }
        ]
    }
];
