import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routers';
import { PluginModule } from '../../plugin/plugin-module';
@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  imports: [
    PluginModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
