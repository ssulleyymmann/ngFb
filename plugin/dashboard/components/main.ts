import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { AuthService } from '../../auth/services/auth-service';
import { CoreSite } from '../../_core/core-site';


@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class MainComponent {
  title = 'app works!';
   coreSite: CoreSite;
  constructor(private auth: AuthService,translate: TranslateService) {
    translate.setDefaultLang('tr');
    translate.use('tr');  
     CoreSite.getServiceAsync(CoreSite).then((result) => {
      this.coreSite = result as CoreSite;     
    });
  }

  signOut(): void {
    this.auth.signOut();
  }
}