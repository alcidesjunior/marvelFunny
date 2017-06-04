import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServiceHttp {
  private url: string;
  public data = [];
  constructor(private _http: Http){}
  api(url: string){
    let root_url = "http://gateway.marvel.com/v1/public/";
    let credentials:string = "?ts=1&apikey=3f4bfbb3e177de2ebe3ee3946227d9ad&hash=0e64a3b59a21c45f466c474dbd0daeef";
    let access_url = root_url+this.url+credentials;
    this.url = url;
    return this._http
        .get(access_url)
        .map(res => res.json())
        .toPromise()
        .then(data => {
          this.data = data;
        })
  }
}
