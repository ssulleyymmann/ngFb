// import {CONST} from '@angular/src/facade/lang';
//import {ListWrapper} from '@angular/src/facade/collection';
/*
map &pipe
http://plnkr.co/edit/yicM31JA006L12zJ0B4U?p=preview
*/


export interface IWidgetList {
    widgets: CoreWidget[];
};


export const enum Action {
    ISPROPERTIES = 1,
    ISLOCK = 2
    ,ISFULSCREEN = 3,
    ISCLOSE = 4
}

export const enum Tag {
    ISGLOBAL = 1,
    ISLOCAL = 2
}

export class CoreWidget {
    public key:string;
    public get Title(): string { return this.title; }
    public get Description(): string { return this.descr; }
    public get WidgetClass(): any { return this.clas; }
    public get Actions(): Action[] { return this.actions; }
    public get Tags(): Tag[] { return this.tags; }
    constructor(
        private clas: any,
        private title: string,
        private descr: string,
        private actions: Action[],
        private tags: Tag[]      
    ) { }
}
export class CoreWD {
    private datas: Map<string, CoreWidget>;
    private _allClass:any[]=[];
    private _menuGroup: any;
    constructor() {
        this.datas = new Map<string, CoreWidget>();        
    }
    set menuGroup(value:any){
        this._menuGroup=value;
    }
    get menuGroup():any{
        if(!this._menuGroup){
            this._menuGroup=[Array.from(this.datas.keys())];
        }
        return this._menuGroup;
    }
    add(key: string, m: CoreWidget): void {
        m.key=key;
        this.datas.set(key, m);
        this._allClass.push(m.WidgetClass);
    }
    getKey(key: string): CoreWidget {
        return this.datas.get(key);
    }
    get data(): Map<string, CoreWidget> {
        return this.datas;
    }
    get values(): CoreWidget[] {
        return Array.from(this.datas.values());
    }
    get allClass(): any[] {
        return this._allClass;
    }
}

export const coreWd: CoreWD = new CoreWD();