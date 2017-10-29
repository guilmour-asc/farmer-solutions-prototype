import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userData = {
    username: "", password: "", name: "", birthday: "", email: "",
    phone: { phoneType: "", phoneNumber: "" },
    location: { address: "", city: "", state: "", country: "" },
    creationDate: (new Date()).toISOString(),
    lastUpdateDate: (new Date()).toISOString(),
    lastLoginDate: (new Date()).toISOString()
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public app: App) {
  }

  goToMain() {
    this.navCtrl.push(TabsPage);
  }
  goBack() {
    this.navCtrl.pop();
  }

  signup() {
    if (this.authService.postData(this.userData, 'signup')) {
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.app.getRootNav().setRoot(TabsPage);
    }
  }

}
