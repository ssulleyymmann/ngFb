import { COOKIE_SEP, encode, decode, toString, isString } from './storage-helper';
import { IStorageSetConfig } from './storage-interface';
declare var moment: any
const DEFAULT_CONFIG: IStorageSetConfig = {};
export class CoreCookie {
    public static getAll(prefix?: string): Object {
        let tmp: Object = document.cookie
            .split(COOKIE_SEP)
            .filter(value => !!value)
            .map(items => items.split('='))
            .reduce((res, [key, value]) => (res[decode(key)] = decode(value), res), {});
        if (!prefix) return tmp;
        var rtr: Object = {}, prefLength: number = prefix.length;;
        for (var key in tmp) {
            if (key.indexOf(prefix) === 0) {
                rtr[key.slice(prefLength, key.length)] = tmp[key];
            }
        }
        return rtr;
    }
    public static get(key): any {
        return this.getAll()[key]
    }
    public static set(key, value, config = DEFAULT_CONFIG): void {
        const {secure, maxAge, domain, expires} = config;
        var cookie = `${encode(key)}=${encode(value)}`;
        if (secure) cookie += ';secure';
        if (!isNaN(maxAge)) cookie += `;max-age=${maxAge}`;
        if (domain) cookie += `;domain=${domain}`;
        if (expires) cookie += `;expires=${isString(expires) ? expires : toString(expires)}`;
        document.cookie = cookie;
    }
    public static remove(key) {
        this.set(key, this.get(key), { maxAge: 0, expires: moment().add(-7, 'days').toDate() });
    }
}
