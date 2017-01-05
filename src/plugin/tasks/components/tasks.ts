import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../services/task-service';
import { coreWd, CoreWidget,Action, Tag } from '../../_widget/widget';


@Component({
  template: `
   <a (click)="removelist()">sil</a>
    <div class="g-row">
      <div class="g-col">
        <task-form (createTask)="taskService.createTask($event)"></task-form>
      </div>
      <div class="g-col">
        <task-list
          [filter]="filter | async"
          [tasks]="taskService.visibleTasks$"
          (remove)="taskService.removeTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

export class TasksComponent {
  filter: Observable<any>;

  constructor(public route: ActivatedRoute, public taskService: TaskService) {
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => taskService.filterTasks(value));
  }
  ngOnDestroy() {
    this.taskService.destroy();
  }
  removelist(){
     this.taskService.destroy();
  }
}
coreWd.add("Tasks", new CoreWidget(TasksComponent,
    'TasksComponent_title', 'kotation_descr', [Action.ISFULSCREEN, Action.ISLOCK, Action.ISPROPERTIES], [Tag.ISGLOBAL]));