import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
  providers: [
    AuthServiceProvider
  ]
})
export class UserProfilePage {
  public user = new Array<any>();
  public quest = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
  }

}
