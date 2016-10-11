import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLogin {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {

  }

  getLogin(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  // Fecha a modal
  closeModalLogin(){
    this.viewCtrl.dismiss();
  }

}
