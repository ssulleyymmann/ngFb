import {
    Component, OnDestroy, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,
    ComponentRef, ReflectiveInjector, NgZone
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { AuthService } from '../../auth/services/auth-service';
import { CoreSite } from '../../_core/core-site';
import { coreWd } from '../../_widget/widget';


@Component({
    selector: 'native',
    templateUrl: './native.html',
    styleUrls: ['./native.scss']
})
export class NativeComponent implements OnInit, OnDestroy {
    @ViewChild('native', { read: ViewContainerRef }) private _viewContainerRef: ViewContainerRef;
    private _ref: ComponentRef<any>;
    coreSite: CoreSite;

    constructor(private auth: AuthService, translate: TranslateService, private zone: NgZone,// route: ActivatedRoute, router: Router,
        private resolver: ComponentFactoryResolver) {
        translate.setDefaultLang('tr');
        translate.use('tr');
        CoreSite.getServiceAsync(CoreSite).then((result) => {
            this.coreSite = result as CoreSite;
        });

    }
    ngOnInit() {
        // obj.widget = route.params['value']['widget'];
        // this.activeWidget = obj.widget;
        // const tmp: ActivatedRoute = route.queryParams['value'];
        let obj: any = { widget: "Tasks", params: {} };
        this.load(obj);
    }
    ngOnDestroy() {
    }
    load(obj: any) {
        this.zone.runOutsideAngular(() => {
            let oWidget = coreWd.getKey(obj.widget);
            if (!oWidget) return;
            let factory = this.resolver.resolveComponentFactory(oWidget.WidgetClass);
            if (!factory) return;
            this._ref = factory.create(ReflectiveInjector.fromResolvedProviders(
                ReflectiveInjector.resolve([]),
                this._viewContainerRef.parentInjector)
            );
            this._ref.instance["data"] = obj;
            //this._ref.instance["tabsetBunds"] = this.tabsetBunds;
            this._viewContainerRef.insert(this._ref.hostView);
        });
    }
    signOut(): void {
        this.auth.signOut();
    }
}