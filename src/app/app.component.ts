import { Component } from '@angular/core';
import { AuthService } from '../../plugin/auth/services/auth-service';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { CoreSite } from '../../core/core-site';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(private auth: AuthService,translate: TranslateService) {
     translate.setDefaultLang('tr');
    translate.use('tr');
    

    

  
  }

  signOut(): void {
    this.auth.signOut();
  }

}

// export class AppComponent {
//   title = 'app works!';
//   constructor(private auth: AuthService,translate: TranslateService) {
//      translate.setDefaultLang('tr');
//     translate.use('tr');
//   }

//   signOut(): void {
//     this.auth.signOut();
//   }
// }
