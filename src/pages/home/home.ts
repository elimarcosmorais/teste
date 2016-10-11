import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Popover } from './../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  openPopover() {
    this.popoverCtrl.create(Popover).present();
  }

}
