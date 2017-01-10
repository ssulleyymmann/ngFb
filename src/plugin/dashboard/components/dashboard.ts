import { Component, ViewEncapsulation} from '@angular/core';
import {
  Portal,
  ComponentPortal,
  TemplatePortalDirective,
} from '@angular/material';

import { AuthService } from '../../auth/services/auth-service';
import { CoreSite } from '../../_core/core-site';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {
  selectedPortal: Portal<any>;

  get activeWidget() {
    return new ComponentPortal(this.dynamicTabs[this.activeTabIndex].widget);
  }

  activeLinkIndex = 0;

  // Dynamic tabs demo
  activeTabIndex = 0;
  addTabPosition = 0;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;
  dynamicTabs = [
    {
      label: 'Tab 1',
      widget:ScienceJoke,
      content: 'This is the body of the first tab'
    }, {
      label: 'Tab 3',
      widget:ScienceJoke2,
      extraContent: true,
      content: 'This is the body of the third tab'
    }
  ];


  constructor(private auth: AuthService) {
      this.selectedPortal=this.activeWidget;
  }
  addTab(includeExtraContent: boolean): void {
    this.dynamicTabs.splice(this.addTabPosition, 0, {
      label: 'New Tab ' + (this.dynamicTabs.length + 1),
      content: 'New tab contents ' + (this.dynamicTabs.length + 1),
      extraContent: includeExtraContent,
      widget:ScienceJoke
    });

    if (this.gotoNewTabAfterAdding) {
      this.activeTabIndex = this.addTabPosition;
    }
  }

  deleteTab(tab: any) {
    console.log("*************",tab);
    this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
  }
  test(a:any,b:any){
    console.log("****a,b",a,b);
  }

}


@Component({
  selector: 'science-joke',
  template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJoke { }
@Component({
  selector: 'science-joke',
  template: `<p>2222222 100 kilopascals go into a bar. </p>`
})
export class ScienceJoke2 { }