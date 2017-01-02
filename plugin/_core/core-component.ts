import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class CoreComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('tr');
    translate.use('tr');
   }
}
