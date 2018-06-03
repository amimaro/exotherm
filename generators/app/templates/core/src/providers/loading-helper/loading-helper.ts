import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingHelperProvider {

  loading: any;

  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading(options) {
    this.loading = this.loadingCtrl.create(options);
    this.loading.present();
    return this.loading.onDidDismiss;
  }

  dismiss() {
    this.loading.dismiss();
  }

}
