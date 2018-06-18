import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalItemComponent } from '../../components/modal-item/modal-item';
import { PopoverComponent } from '../../components/popover/popover';

import { ModalHelperProvider } from '../../providers/modal-helper/modal-helper';
import { LoadingHelperProvider } from '../../providers/loading-helper/loading-helper';
import { PopoverHelperProvider } from '../../providers/popover-helper/popover-helper';
import { DatabaseHelperProvider } from '../../providers/database-helper/database-helper';

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
    public databaseHelper: DatabaseHelperProvider
  ) {
    // this.items = this.itemProvider.getItems();
    this.loadingHelper.presentLoading({
      content: 'Loading...'
    });
    this.databaseHelper.all({
      collection: 'items'
    }).subscribe(val => {
      this.items = val;
      console.log(this.items)
      this.loadingHelper.dismiss();
    });
  }

  showCreateModal() {
    this.modalHelper.presentModal(ModalItemComponent)
      .onDidDismiss(item => {
        if (item)
          this.databaseHelper.add({
            collection: 'items',
            timestamps: true,
            data: item
          });
      });
  }

  showUpdateModal(data) {
    this.modalHelper.presentModal(ModalItemComponent, {
      item: data
    })
      .onDidDismiss(item => {
        if (item)
          this.databaseHelper.update({
            collection: 'items',
            data: item
          });
      });
  }

  popoverItem(item) {
    this.popoverHelper
      .presentPopover(PopoverComponent, {
        options: ['Edit', 'Remove', 'Back']
      })
      .onDidDismiss(data => {
        if (data === 0) this.showUpdateModal(item);
        if (data === 1) this.databaseHelper.remove({
          collection: 'items',
          softDelete: true,
          data: item
        });
      });
  }

}
