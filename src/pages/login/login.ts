import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

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
  providers: [
    AuthServiceProvider
  ]
})
export class LoginPage {
  user = { "username": "", "password": "" };
  public loader;
  public userData = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController) { }

  loadingShow() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, por favor..."
    });
    this.loader.present();
  }

  loadingHide() {
    this.loader.dismiss();
  }

  login() {
    this.loadingShow();
    this.authService.getUser(this.user).subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      this.userData = returnedObj[0];
      if (this.userData) {
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }
      this.loadingHide();
      this.navCtrl.push(TabsPage);
    }, error => {
      console.log("biiitch "+error);
      this.loadingHide();
    }
    );
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

}
