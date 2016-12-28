import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MaterialModule } from '@angular/material';

import { CoreSite } from './core-site';

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
        MaterialModule.forRoot()       
    ],
    exports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule,
        MaterialModule
    ],
    declarations: [],
    providers: [CoreSite],
    entryComponents: []

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