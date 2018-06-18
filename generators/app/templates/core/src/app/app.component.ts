import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SigninPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
    statusBar: StatusBar,
    private menu: MenuController,
    splashScreen: SplashScreen,
    private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.auth.afAuth.authState
      .subscribe(
      user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = SigninPage;
        }
      },
      () => {
        this.rootPage = SigninPage;
      }
      );
  }

  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(SigninPage);
  }

  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
  }

}
