import { Component, OnInit, OnDestroy, trigger, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationService } from '../../../shared/services/animation.service';
import { ViewportService } from '../../../shared/services/viewport.service';



export enum MODAL_KEYS {
  ESCAPE = 27,
  RIGHT_ARROW = 37,
  LEFT_ARROW = 39
}

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
  animations: [trigger('modal', AnimationService.fadeIn)]
})
export class TaskModalComponent implements OnInit, OnDestroy {
  routeSub: any;
  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private viewportService: ViewportService) { }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
    this.viewportService.lockScroll();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.viewportService.unlockScroll();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event) {
    if (event.keyCode === MODAL_KEYS.ESCAPE) {
      this.close();
    }

    if (event.keyCode === MODAL_KEYS.RIGHT_ARROW) {
      let id = this.id === 1 ? 151 : this.id - 1;
      this.router.navigateByUrl(`/tasks/${id}`);
    }

    if (event.keyCode === MODAL_KEYS.LEFT_ARROW) {
      let id = this.id < 151 ? this.id + 1 : 1;
      this.router.navigateByUrl(`/tasks/${id}`);
    }
  }

  close() {
    this.router.navigateByUrl('/tasks');
  }
}
