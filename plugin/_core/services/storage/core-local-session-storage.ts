import {IStorage} from './storage-interface';
import {convertFromJSON, convertToJSON,JOIN_SEP} from './storage-helper';
export class CoreStorage implements IStorage {    
    private prefix: string;
    constructor(private storage: any, dbName: string, table?: string) {        
        this.prefix = dbName + JOIN_SEP + (table ? table : '_') + JOIN_SEP;
    }
    public getItem(key: string): any {
        return convertFromJSON(this.storage.getItem(this.that(key)));
    };
    public setItem(key: string, value: any): void {
        this.storage.setItem(this.that(key), convertToJSON(value));
    };
    public removeItem(key: string): void {
        this.storage.removeItem(this.that(key));
    };
    public clear(): void {
        for (var key in this.storage) {
            if (key.indexOf(this.prefix) === 0) this.storage.removeItem(key);
        }
    };
    public getAll(): Object {
        var rtr: Object = {}, prefLength = this.prefix.length;
        for (var key in this.storage) {
            if (key.indexOf(this.prefix) === 0) {
                rtr[key.slice(prefLength, key.length)] = this.storage[key];
            }
        }
        return rtr;
    }
    public hasOwnProperty(key: string): boolean {
        return <boolean>this.getItem(key);
    }
    public key(index: number): string {
        return this.storage.key(index);
    }
    public get length(): number {
        return Object.keys(this.getAll()).length;
    }
    private that(key: string): string {
        return this.prefix + key;
    };
}
