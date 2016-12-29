import { Component } from '@angular/core';
import { CoreStorageManager, STORAGE_DRIVER, generateStorage } from '../../_core/services/storage/core-storage-manager';
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
    //default site ex
    CoreSite.getServiceAsync(CoreSite).then((result) => {
      this.coreSite = result as CoreSite;
    });

    //stroge ex      
    //  generateStorage(STORAGE_DRIVER.LOCAL, domain, 'datas',null)
    setTimeout(() => {
      console.log("*************1");
      generateStorage(STORAGE_DRIVER.LOCAL, "tkey", 'tkey2').then((strg: CoreStorageManager) => {
        console.log("*************2");
        strg.Storage.setItem('tkey3', 121231);
      });
    }, 1);
    ///
    
  }


}