
//http://www.metaltoad.com/blog/angular-2-http-observables
export abstract class CoreService {
    private initializationProcess: Promise<CoreService> = null;
    public getInstance(): Promise<CoreService> {
        return new Promise((resolve, reject) => {
            // let z: NgZone = new NgZone({ enableLongStackTrace: false });
            if (!this.initializationProcess) {
                // z.runOutsideAngular(() => {
                    this.initializationProcess = this.initialize();
                // });
            }
            this.initializationProcess.then(
                (resolved: any) => {
                     // console.log("=============0", this, resolved);
                    //this.console = MtxSite.getService(MtxLogger);
                    // z.run(() => {
                        if (resolved) resolve(this);
                        else reject(Error('An error occured' + resolved));
                    // });
                },
                (rejected: any) => {
                    //console.log("=========uu====1", this, rejected);
                    reject(Error('An error occured'));
                    // 
                    // reject('An error occured');
                });
        });
    }
    abstract initialize(): Promise<CoreService>;
}
