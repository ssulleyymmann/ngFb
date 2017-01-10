import { Component } from '@angular/core';
import { CoreStorageManager, STORAGE_DRIVER, generateStorage } from '../../_core/services/storage/core-storage-manager';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { AuthService } from '../../auth/services/auth-service';
import { CoreSite } from '../../_core/core-site';
import { FirebaseAuth } from 'angularfire2';



@Component({
  selector: 'test',
  templateUrl: './test.html',
  styleUrls: ['./test.scss']
})
export class TestComponent {
  title = 'app works!';
  coreSite: CoreSite;
  
  constructor(private auth: AuthService) {
    //default site ex
    CoreSite.getServiceAsync(CoreSite).then((result) => {
      this.coreSite = result as CoreSite;
    });

    //stroge ex      
    //  generateStorage(STORAGE_DRIVER.LOCAL, domain, 'datas',null)
    setTimeout(() => {
      // console.log("*************1");
      generateStorage(STORAGE_DRIVER.LOCAL, "tkey", 'tkey2').then((strg: CoreStorageManager) => {
        // console.log("*************2");
        strg.Storage.setItem('tkey3', 121231);
      });
    }, 1);
    ///

    // var name, email, photoUrl, uid, emailVerified;
    
   
  
    // auth.af.auth.subscribe(auth =>
    //   console.log("****-+", auth.google.email)
    // );// user info is inside auth object


    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   emailVerified = user.emailVerified;
    //   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    //   // this value to authenticate with your backend server, if
    //   // you have one. Use User.getToken() instead.
    // }

  }


}