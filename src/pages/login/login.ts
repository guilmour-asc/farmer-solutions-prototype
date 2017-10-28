import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData: any;
  userData = { "username": "", "password": "" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) { }

  login() {
    //Login page link
    this.navCtrl.push(TabsPage);
  }

}
