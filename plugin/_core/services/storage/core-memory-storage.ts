import {IStorage} from './storage-interface'

export class CoreMemoryStorage implements IStorage {
    private static _cacheAll: Object = {};
    private _cache: Object;
    constructor(dbName: string, table?: string) {
        this._cache = CoreMemoryStorage.getTable(dbName, table);
    }
    public getItem(key: string): any {
        return this._cache[key];
    }
    public setItem(key: string, value: any): void {
        this._cache[key] = value;
    }
    public removeItem(key: string): void {
        delete this._cache[key];
    }
    public clear(): void {
        this._cache = {};
    }
    public getAll(): Object {
        return this._cache;
    }
    public hasOwnProperty(key: string): boolean {
        return <boolean>this.getItem(key);
    }
    public key(index: number): string {
        return Object.keys(this._cache)[index];
    }
    public get length(): number {
        return Object.keys(this._cache).length;
    }
    private static getTable(dbName: string, table?: string): Object {
        if (!this._cacheAll[dbName]) this._cacheAll[dbName] = {};
        let tnmae: string = table ? table : "_";
        if (!this._cacheAll[dbName][tnmae]) this._cacheAll[dbName][tnmae] = {};
        return this._cacheAll[dbName][tnmae];
    }
}
