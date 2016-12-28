import { Injectable, Injector, ApplicationRef, ReflectiveInjector } from '@angular/core';

// import { MediaListener, Media, media, MEDIA_NAME } from './widgets/ui/utils/media';
import { Http } from '@angular/http';
// import { MtxDispatcher, mtxDispatcher } from './service/mtx-dispatcher';
import { CoreService } from './services/core-service';

//https://plnkr.co/edit/LoZbInkkrjBIu65rZySv?p=preview
//https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute
interface ObjTP {
    t: string;
    p: string;
}
export class FireBaseInfo {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    storageBucket: string;
    messagingSenderId: string;
}

export class CoreSiteOptions {
    sizes: string[];
    dbName: string;
    firebaseInfo: FireBaseInfo[];
    domainLink: string;
    environment: string;
}
const DEFAULT_OPTIONS: CoreSiteOptions = {
    dbName: 'firebase.',
    sizes: ['xs', 'sm', 'md', 'lg'],
    firebaseInfo: null,
    domainLink: null,
    environment: "prod"
};

@Injectable()
export class CoreSite extends CoreService {
    //private static mtxInjector: ReflectiveInjector;
    private static coreInjector: Injector;
    private static coreInjectorChld: any = {};
    private _mediaKey: string;
    // public get mediaKey(): string { return this._mediaKey };
    private _options: CoreSiteOptions;
    private _optionsReq: any;
    // private _mediaListeners: MediaListener[] = [];
    constructor() {
        super();

        //CoreSite.mtxInjector =  ReflectiveInjector.resolveAndCreate([]);
        //this.getInstance();
    }
    // ?'+'mtxTime='+ Date.now().toString()
    initialize(): Promise<CoreService> { 
        return new Promise((resolve, reject) => {
            let http = CoreSite.getService(Http);
            //console.log('=========0CoreSite.options===========',http,'assets/site.json?' + 'mtxTime=' + Date.now().toString());
            this._optionsReq = http.get('assets/site.json?' + 'mtxTime=' + Date.now().toString())
                .toPromise()
                .then(res => {
                    this._options = Object.assign({}, DEFAULT_OPTIONS, res.json());
                    //console.log('=========1CoreSite.options===========',this._options);
                    var hasmedia: string;
                    this._options.sizes.forEach((size: string) => {
                        // if (typeof hasmedia === 'undefined' && Media.hasMedia(size)) hasmedia = size;
                        // let l = media.listen(Media.getQuery(size));
                        // l.onMatched.subscribe((mql: MediaQueryList) => {
                        //     if (!mql.matches) return;
                        //     this.changeMediaVal(mql.media);
                        // });
                        // this._mediaListeners.push(l);
                    });
                    // if (typeof hasmedia !== 'undefined') this.changeMediaKey(hasmedia);
                    //console.log('=========CoreSite.options===========',this._options);
                    resolve(this);
                });
        });
    }
    // private changeMediaVal(val: string): void {
    //     this.changeMediaKey(MEDIA_NAME[val]);
    // }
    // private changeMediaKey(key: string): void {
    //     this._mediaKey = key;
    //     mtxDispatcher.triger(MtxDispatcher.CHANGE_MEDIA, key);
    //     //mtxDispatcher.trigerNoZone(MtxDispatcher.CHANGE_MEDIA, key);
    // }
    private static modal: any;
    public static set rootModal(modal: any) {
        this.modal = modal;
    }
    public static get rootModal(): any {
        return this.modal;
    }

    private static _viewContainer: any;
    public static set viewContainer(val: any) {
        this._viewContainer = val;
    }
    public static get viewContainer(): any {
        return this._viewContainer;
    }

    /* tslint:disable */
   

    public static set CORE_INJECTOR(injector: Injector) {
        //console.log('yeegetyy===============',injector); 
        this.coreInjector = <ReflectiveInjector>injector;//<ReflectiveInjector>(injector._view.parentInjector);
        //this.mtxInjector = <ReflectiveInjector>(injector._view.parentInjector);
        //console.log('yeeb===============',this.mtxInjector,injector);  
    }
    /* tslint:enable */

    public static getService<T>(service: any): any {
       
        
        var rtr: any;
        try {
            //    console.log("**********test",service);
            rtr = this.coreInjector.get(service);
            //console.log('bahoo===============',rtr);  
        } catch (error) {

            //   console.log("**********test-err",error);
            //console.log('yeeget2===============',service);  

            var providers = ReflectiveInjector.resolve([service]), nm: string = providers[0].key.displayName;
            if (this.coreInjectorChld[nm]) rtr = this.coreInjectorChld[nm];
            else {
                var injector = ReflectiveInjector.fromResolvedProviders(providers, this.coreInjector);
                rtr = injector.get(service);
                this.coreInjectorChld[nm] = rtr;
            }
        };
        return rtr;
    }
    public static getServiceAsync<T>(service: T): Promise<CoreService> {
        return new Promise((resolve, reject) => {
            CoreSite.getService(service).getInstance().then(
                (serviceInstance: CoreService) => {
                    resolve(serviceInstance);
                },
                (error: Error) => {
                    reject(error);
                }
            );
        });
    }
    public get OPTION(): CoreSiteOptions {
        return this._options;
    }
    //burayı çağıranlar CoreService göre düzenlenip buranın silinmesi lazım
    public get PomiseOPTION(): Promise<CoreSiteOptions> {
        if (this._options) return Promise.resolve(this._options);
        return Promise.resolve(this._optionsReq);
    }
}

