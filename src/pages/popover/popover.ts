import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { ModalLogin } from './../modal-login/modal-login';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class Popover {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController) {}

  openModalLogin(){
    this.modalCtrl.create(ModalLogin).present();
    this.viewCtrl.dismiss();
  }

}
