import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalItemComponent } from '../../components/modal-item/modal-item';
import { PopoverComponent } from '../../components/popover/popover';

import { ModalHelperProvider } from '../../providers/modal-helper/modal-helper';
import { LoadingHelperProvider } from '../../providers/loading-helper/loading-helper';
import { PopoverHelperProvider } from '../../providers/popover-helper/popover-helper';

import { ItemProvider } from '../../providers/item/item';

import { Item } from '../../models/Item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Item[];

  constructor(
    public navCtrl: NavController,
    public modalHelper: ModalHelperProvider,
    public loadingHelper: LoadingHelperProvider,
    public popoverHelper: PopoverHelperProvider,
    public itemProvider: ItemProvider
  ) {
    this.items = this.itemProvider.getItems();
  }

  showCreateModal() {
    this.modalHelper.presentModal(ModalItemComponent)
      .onDidDismiss(item => {
        if(item)
          this.itemProvider.addItem(item);
      });
  }

  showUpdateModal(data) {
    this.modalHelper.presentModal(ModalItemComponent, {
        item: data
      })
      .onDidDismiss(item => {
        if(item)
          this.itemProvider.updateItem(item);
      });
  }

  popoverItem(item) {
    this.popoverHelper
      .presentPopover(PopoverComponent, {
        options: ['Edit', 'Remove', 'Back']
      })
      .onDidDismiss(data => {
        if (data === 0) this.showUpdateModal(item);
        if (data === 1) this.itemProvider.removeItem(item);
      });
  }

}
