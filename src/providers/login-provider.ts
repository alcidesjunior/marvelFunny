import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginProvider {

  constructor(private _http: Http) {
  }

  sign_in(data){
    if(data.user == "alcides" && data.pwd == "123"){
      return true;
    }else{
      return false;
    }
  }
  sign_out(){

  }

}
