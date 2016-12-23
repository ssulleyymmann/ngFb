import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  sidenav:any;
  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire,private auth: AuthService) {
    // create a list at /items
    //this.items = af.database.list('/items');
  }
  signOut(): void {
    this.auth.signOut();
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
