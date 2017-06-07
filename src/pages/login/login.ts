import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login-provider';
import { TabsPage } from '../tabs/tabs';
@Component({
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
  public data = {user: '', pwd: ''};
  constructor(
    private _login: LoginProvider,
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
