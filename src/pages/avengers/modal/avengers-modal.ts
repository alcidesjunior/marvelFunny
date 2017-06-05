import { Component,OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { MarvelProvider } from '../../../providers/marvel-provider';

@Component({
  templateUrl: 'avengers-modal.html'
})
export class AvengersModal implements OnInit{
  public name:string = this.navParams.get('name');
  public url:string = this.navParams.get('url');
  public hero;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private _service: MarvelProvider
  ){}
  ngOnInit(){
    this._service.api(this.url)
    .then(info => {
      this.hero = info.data.results;
      console.log(this.hero);
    });
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }
}
