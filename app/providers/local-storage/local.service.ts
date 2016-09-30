import {Injectable} from '@angular/core';
import {Storage, SqlStorage} from "ionic-angular";

@Injectable()
export class LocalService {
    local:Storage;

    constructor(){
        this.local = new Storage(SqlStorage);
    }

    setData(key:string, value:any){
        this.local.set(key, value);
    }

    getData(key:string){
        return this.local.get(key);
    }

    

}