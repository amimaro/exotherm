import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalComponent } from '../../components/modal/modal';

import { ModalHelperProvider } from '../../providers/modal-helper/modal-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = ['a', 'b'];

  constructor(
    public navCtrl: NavController,
    public modalHelper: ModalHelperProvider
  ) {
  }

  showModalCreate() {
    this.modalHelper.presentModal(ModalComponent)
      .onDidDismiss(item => {
        console.log(item)
      });
  }

}
