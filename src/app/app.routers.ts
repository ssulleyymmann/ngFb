import { Routes } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { TasksComponent } from '../tasks/components/tasks';
import { TaskModalComponent } from '../tasks/components/task-modal/task-modal.component';



export const routes: Routes = [
    { path: '', component: TestsComponent },
    {
        path: 'tests', component: TestsComponent, children: [
            { path: ':id', component: TaskModalComponent }
        ]
    },
   // { path: 'tests', component: TestsComponent },
     { path: 'tasks', component: TasksComponent }
    // {
    //     path: 'tasks', component: TasksComponent, children: [
    //         { path: ':id', component: TaskModalComponent }
    //     ]
    // },
];
