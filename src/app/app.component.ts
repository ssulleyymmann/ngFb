import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    // create a list at /items
    //this.items = af.database.list('/items');
  }
  login() {
    this.af.auth.login();

  }
  getData() {
    this.items = this.af.database.list('/items');
    console.log("********", this.items);
  }
  setData() {
    this.items = this.af.database.list('/items');
    this.items.push("4200")
  }
  logout() {
    this.af.auth.logout();
  }
}
