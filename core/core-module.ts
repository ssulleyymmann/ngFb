import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { CoreSite } from './core-site';
import { TaskModalComponent } from '../plugin/tasks/components/task-modal/task-modal.component';
import { FooterComponent } from '../src/shared/layout/footer/footer.component';
import { TestsComponent } from '../src/app/tests/tests.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { AngularFireModule, AuthMethods } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from '../plugin/auth/index';
import { TasksModule } from '../plugin/tasks/index';
import { ViewportService } from '../src/shared/services/viewport.service';

var fbConfig = {
    apiKey: "AIzaSyB5ybQVnAyiUgw84t8PBBwRYPPT44wsXaw",
    authDomain: "ngfb-44987.firebaseapp.com",
    databaseURL: "https://ngfb-44987.firebaseio.com",
    storageBucket: "ngfb-44987.appspot.com",
    messagingSenderId: "498586561793"
};

// const fbAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }
const fbAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        AngularFireModule.initializeApp(fbConfig, fbAuthConfig),
        TasksModule,
        AuthModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
    ],
    exports: [

    ],
    declarations: [
        FooterComponent,
        TestsComponent,
        TaskModalComponent
    ],
    providers: [ViewportService, CoreSite]
    , entryComponents: [

    ]

})
export class CoreModule {
    coreSite: CoreSite;
    constructor(appRef: ApplicationRef, injector: Injector) {
        CoreSite.CORE_INJECTOR = injector;

        // CoreSite.getServiceAsync(CoreSite).then((result) => {
        //     this.coreSite = result as CoreSite;
        //     //fbConfig = this.coreSite.OPTION.firebaseInfo;

        // });

    }
}