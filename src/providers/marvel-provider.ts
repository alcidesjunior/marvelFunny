import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarvelProvider {
  private url: string;
  public data;
  constructor(private _http: Http) {
  }
  api(url: string){
    this.url = url;
    let root_url = "https://gateway.marvel.com:443/v1/public/";
    let credentials:string = "&ts=1&apikey=3f4bfbb3e177de2ebe3ee3946227d9ad&hash=0e64a3b59a21c45f466c474dbd0daeef";
    let access_url = root_url+this.url+credentials;
    //return access_url;
    console.log(access_url);
    return this._http
        .get(access_url)
        .map(res => res.json())
        .toPromise()
  }

}
