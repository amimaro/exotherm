import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

/*
  Generated class for the ModalHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalHelperProvider {

  modal: any;

  constructor(
    public modalCtrl: ModalController
  ) {
  }

  presentModal(component, data: any = {}) {
    this.modal = this.modalCtrl.create(component, data);
    this.modal.present();
    return this.modal;
  }

}
