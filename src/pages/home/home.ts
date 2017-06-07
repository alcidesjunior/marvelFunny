import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel-provider';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public nav: NavController, private _service: MarvelProvider) {


  }
  ngOnInit(){
    // this._service.api("/characters?name=avengers")
    // .then(info => {
    //   this.avengers = info.data.results;
    // });
    // this._service.api("/characters?name=captain%20america")
    // .then(info => {
    //   this.capitain_america = info.data.results;
    // });
  }
  logout(){
    this.nav.setRoot(LoginPage);
  }

}
