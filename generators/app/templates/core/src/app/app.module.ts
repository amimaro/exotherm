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

import { ModalComponent } from '../components/modal/modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModalHelperProvider,
    LoadingHelperProvider,
    PopoverHelperProvider
  ]
})
export class AppModule {}
