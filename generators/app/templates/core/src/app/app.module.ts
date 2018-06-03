import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ModalHelperProvider } from '../providers/modal-helper/modal-helper';
import { LoadingHelperProvider } from '../providers/loading-helper/loading-helper';
import { PopoverHelperProvider } from '../providers/popover-helper/popover-helper';
import { ItemProvider } from '../providers/item/item';

import { ModalItemComponent } from '../components/modal-item/modal-item';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalItemComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalItemComponent,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModalHelperProvider,
    LoadingHelperProvider,
    PopoverHelperProvider,
    ItemProvider
  ]
})
export class AppModule {}
