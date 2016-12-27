import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routers';
import { CoreModule } from '../../core/core-module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(routes, { useHash: false})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
