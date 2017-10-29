import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  rootPage = UserProfilePage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openPageAbout() {
    this.navCtrl.push(AboutPage);
  }

  logoff() {
    localStorage.removeItem("userData");
    this.app.getRootNav().setRoot(LoginPage);
  }

}
