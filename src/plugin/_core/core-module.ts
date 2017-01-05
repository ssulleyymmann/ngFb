import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MaterialModule } from '@angular/material';

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
    providers: [],
    entryComponents: []

})
export class CoreModule {}