import { IStorage } from './storage-interface';
import { CoreMemoryStorage } from './core-memory-storage';
import { CoreCookieStorage } from './core-cookie-storage';
import { CoreStorage } from './core-local-session-storage';
import { observable, observe, Lambda } from 'mobx';
const STORAGE_TEST_KEY = 'STORAGE_TEST_KEY';

export enum STORAGE_DRIVER { MEMORY = 0, COOKIE = 1, SESSION = 2, LOCAL = 3 }

export class CodeKeyValue {
    constructor(public value: any, public lambda: Lambda) { }
}

export class CoreStorageManager {
    private bMob: Map<string, CodeKeyValue>;
    constructor(private storage: IStorage) {
        this.bMob = new Map<string, CodeKeyValue>();
    }
    public get Storage(): IStorage {
        return this.storage;
    }

    public bind(key: string, defaultValue: Object): any {
        if (this.bMob.has(key)) {
            return this.bMob.get(key).value;
        }
        if (this.storage.hasOwnProperty(key)) {
            defaultValue = this.storage.getItem(key);
        } else {
            this.storage.setItem(key, defaultValue);
        }

        var lmd: Lambda = observe(observable(defaultValue), (change) => {
            //console.log(change.type, change.name, "from", change.oldValue, "to", change.object[change.name]);
            //console.log("----change ",key, change.object);
            this.storage.setItem(key, change.object);
        });
        this.bMob.set(key, new CodeKeyValue(defaultValue, lmd));

        return defaultValue;
    };
    public unbind(key: string): void {
        if (this.bMob.has(key)) {
            this.bMob.get(key).lambda();
            this.bMob.delete(key);
        }
    };
    // public static getInstance = function (driver: STORAGE_DRIVER, dbName: string, table?: string): Promise<CoreStorageManager> {
    //     let storage: IStorage;
    //     switch (driver) {
    //         case STORAGE_DRIVER.LOCAL:
    //             storage = new CoreStorage(localStorage, dbName, table);
    //             break;
    //         case STORAGE_DRIVER.SESSION:
    //             storage = new CoreStorage(sessionStorage, dbName, table);
    //             break;
    //         case STORAGE_DRIVER.COOKIE:
    //             storage = new CoreCookieStorage(dbName, table);
    //             break;
    //         default:
    //             storage = new CoreMemoryStorage(dbName, table);
    //             break;
    //     }
    //     try {
    //         storage.setItem(STORAGE_TEST_KEY, STORAGE_TEST_KEY);
    //         storage.getItem(STORAGE_TEST_KEY);
    //         storage.removeItem(STORAGE_TEST_KEY);
    //         return Promise.resolve(new CoreStorageManager(storage));
    //     } catch (e) {
    //         let mstrg: Promise<CoreStorageManager> = null;
    //         switch (driver) {
    //             case STORAGE_DRIVER.LOCAL:
    //             case STORAGE_DRIVER.SESSION:
    //                 mstrg = CoreStorageManager.getInstance(STORAGE_DRIVER.COOKIE, dbName, table);
    //                 break;
    //             case STORAGE_DRIVER.COOKIE:
    //                 mstrg = CoreStorageManager.getInstance(STORAGE_DRIVER.MEMORY, dbName, table);
    //                 break;
    //         }
    //         return mstrg;
    //     }
    // }

}

export const generateStorage = (driver: STORAGE_DRIVER, dbName: string, table?: string): Promise<CoreStorageManager> => {
    let storage: IStorage;
    try {
        switch (driver) {
            case STORAGE_DRIVER.LOCAL:
                storage = new CoreStorage(localStorage, dbName, table);
                break;
            case STORAGE_DRIVER.SESSION:
                storage = new CoreStorage(sessionStorage, dbName, table);
                break;
            case STORAGE_DRIVER.COOKIE:
                storage = new CoreCookieStorage(dbName, table);
                break;
            default:
                storage = new CoreMemoryStorage(dbName, table);
                break;
        }
    } catch (err) {
        storage = new CoreMemoryStorage(dbName, table);
    }
    try {
        storage.setItem(STORAGE_TEST_KEY, STORAGE_TEST_KEY);
        storage.getItem(STORAGE_TEST_KEY);
        storage.removeItem(STORAGE_TEST_KEY);
        return Promise.resolve(new CoreStorageManager(storage));
    } catch (e) {
        let mstrg: Promise<CoreStorageManager> = null;
        switch (driver) {
            case STORAGE_DRIVER.LOCAL:
            case STORAGE_DRIVER.SESSION:
                mstrg = generateStorage(STORAGE_DRIVER.COOKIE, dbName, table);
                break;
            case STORAGE_DRIVER.COOKIE:
                mstrg = generateStorage(STORAGE_DRIVER.MEMORY, dbName, table);
                break;
        }
        return mstrg;
    }
}
