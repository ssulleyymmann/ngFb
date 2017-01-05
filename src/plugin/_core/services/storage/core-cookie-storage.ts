import {IStorage} from './storage-interface';
import {CoreCookie} from './core-cookie-helper';
import {convertFromJSON,convertToJSON,JOIN_SEP} from './storage-helper';

export class CoreCookieStorage implements IStorage {
  private prefix: string;
  constructor(dbName: string, table?: string) {
    this.prefix = dbName + JOIN_SEP + (table ? table : '_') + JOIN_SEP;
  }
  public getItem(key: string): any {
    return convertFromJSON(CoreCookie.get(this.prefix+key));
  }
  public setItem(key: string, value: any, config: any): void {    
    CoreCookie.set(this.prefix+key, convertToJSON(value), config);
  }
  public removeItem(key: string): void {
    CoreCookie.remove(this.prefix+key)
  }
  public clear(): void {
    // Object.keys(CoreCookie.getAll())
    //   .forEach(key => CoreCookie.remove(key))
    Object.keys(CoreCookie.getAll(this.prefix))
      .forEach(key => this.removeItem(key))
  }
  public getAll(): Object {
    return CoreCookie.getAll(this.prefix);
  }
  public hasOwnProperty(key: string): boolean {
    return <boolean>this.getItem(key);
  }
  public key(index: number): string {
    var cookies = Object.keys(CoreCookie.getAll(this.prefix));
    return cookies[index];
  }
  public get length(): number {
    return Object.keys(CoreCookie.getAll(this.prefix)).length;
  }
}
