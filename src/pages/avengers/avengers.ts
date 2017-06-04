import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceHttp } from '../../service/service-http';
@Component({
  selector: 'page-avengers',
  templateUrl: 'avengers.html',
})
export class AvengersPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _service: ServiceHttp
  ) {
  }


}
