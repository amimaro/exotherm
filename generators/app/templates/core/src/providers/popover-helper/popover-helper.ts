import { Injectable } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Injectable()
export class PopoverHelperProvider {

  popover: any;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(component, data: any = {}) {
    this.popover = this.popoverCtrl.create(component, data);
    this.popover.present();
    return this.popover;
  }

  dismissPopover() {
    this.popover.dismiss();
  }

}
