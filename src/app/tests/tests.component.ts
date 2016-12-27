import { Component, OnInit } from '@angular/core';
import { CoreSite } from '../../../core/core-site';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  coreSite: CoreSite;
  constructor() { }

  ngOnInit() {
    CoreSite.getServiceAsync(CoreSite).then((result) => {
      this.coreSite = result as CoreSite;
      console.log("************coreSite",this.coreSite);
    });
  }
}
