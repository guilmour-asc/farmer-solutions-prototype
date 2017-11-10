import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
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
  public userData: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public app: App) { }

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
    this.authService.getDatabase(this.user).subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      for (let u of returnedObj["users"]) {
        if (this.user.username == u["username"] && this.user.password == u["password"]) {
          this.userData = u;
        }
      }
      if (this.userData) {
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.loadingHide();
        this.app.getRootNav().setRoot(TabsPage);
      } else {
        this.loadingHide();
        this.user.username = "";
        this.user.password = "";
        this.authService.toastForFailed(404);
      }
    }, error => {
      console.log(error);
      this.loadingHide();
      this.user.username = "";
      this.user.password = "";
      this.authService.toastForFailed(error["status"]);
    }
    );
  }

  goToSignUp() {
    this.navCtrl.push(SignupPage);
  }

}
