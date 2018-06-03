import { Injectable } from '@angular/core';
import { ModalController } from 'ionic-angular';

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
