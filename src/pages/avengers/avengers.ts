import { Component,OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel-provider';
import { AvengersModal } from './modal/avengers-modal';
@Component({
  selector: 'page-avengers',
  templateUrl: 'avengers.html',
})
export class AvengersPage implements OnInit{
  public avengers;
  public all_avengers;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _service: MarvelProvider,
    public modalCtrl: ModalController
  ) {
  }

  ngOnInit(){
    this._service.api("/characters?name=avengers")
    .then(info => {
      this.avengers = info.data.results;
    });
    this.all_avengers = [
      {
        name: "Capitain America",
        url: "/characters?name=captain%20america"
      },
      {
        name: "Iron Man",
        url: "/characters?name=iron%20man"
      },
      {
        name: "Hulk",
        url: "/characters?name=hulk"
      },
      {
        name: "Thor",
        url: "/characters?name=thor"
      },
      {
        name: "Wasp",
        url: "/characters?name=wasp"
      },

    ];

  }

  openModal(av) {
    let myModal = this.modalCtrl.create(AvengersModal,av);
    myModal.present();
  }


}
