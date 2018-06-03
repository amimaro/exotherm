import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-item',
  templateUrl: 'modal-item.html'
})
export class ModalItemComponent {

  title: string;
  form: any;

  constructor(public viewCtrl: ViewController) {
    if(viewCtrl.data.item) {
      this.form = viewCtrl.data.item;
      this.title = "Update Item Modal";
    } else {
      this.form = {};
      this.title = "Create Item Modal";
    }
  }

  send() {
    this.viewCtrl.dismiss(this.form)
  }

  dismiss() {
    this.viewCtrl.dismiss(null)
  }

}
