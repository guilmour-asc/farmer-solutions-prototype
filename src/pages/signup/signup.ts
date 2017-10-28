import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  responseData: any;
  userData = {
    "username": "", "password": "", "name": "", "birthday": "", "email": "",
    "phone": [{ 'phoneType': "", 'phoneNumber': "" }],
    "location": [{ 'address': "", 'city': "", 'state': "", 'country': "" }],
    "creationDate": (new Date()).toISOString(),
    "lastUpdateDate": (new Date()).toISOString(),
    "lastLoginDate": (new Date()).toISOString()
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    // console.log(this.userData);
    this.authService.postData(this.userData, 'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    }, (err) => {
      console.log(err);
    });

  }

}
