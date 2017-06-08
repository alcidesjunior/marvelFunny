import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { TabsPage } from '../tabs/tabs';
@Component({
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  public data = {user: '', pwd: ''};
  constructor(
    private _login: AuthProvider,
    public nav: NavController
  ){

  }
  ngOnInit(){

  }
  login(){
    if(this._login.sign_in(this.data)){
      this.nav.setRoot(TabsPage);
    }
  }


}
