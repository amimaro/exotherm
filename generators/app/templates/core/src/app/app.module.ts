import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { ModalHelperProvider } from '../providers/modal-helper/modal-helper';
import { LoadingHelperProvider } from '../providers/loading-helper/loading-helper';
import { PopoverHelperProvider } from '../providers/popover-helper/popover-helper';
import { DatabaseHelperProvider } from '../providers/database-helper/database-helper';

import { ModalItemComponent } from '../components/modal-item/modal-item';
import { PopoverComponent } from '../components/popover/popover';
import { AuthProvider } from '../providers/auth/auth';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalItemComponent,
    PopoverComponent,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalItemComponent,
    PopoverComponent,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ModalHelperProvider,
    LoadingHelperProvider,
    PopoverHelperProvider,
    DatabaseHelperProvider,
    AuthProvider,
    AngularFireAuth,
  ]
})
export class AppModule { }
