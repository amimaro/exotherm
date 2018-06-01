import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingHelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
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
