import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { AuthService } from '../../auth/services/auth-service';
import { CoreSite } from '../../_core/core-site';



@Component({
  selector: 'test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent {
  title = 'app works!';
  coreSite: CoreSite;
  constructor() {
    CoreSite.getServiceAsync(CoreSite).then((result) => {
      this.coreSite = result as CoreSite;
      console.log("************coreSite", this.coreSite);
    });
  }


}