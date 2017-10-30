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

    // this.authService.getCategoryData(0).subscribe(data => {
    //   const response = (data as any);
    //   const returnedObj = JSON.parse(response._body);
    //   this.quest = returnedObj[0];
    //   console.log(this.quest["questionnaire"][0].sectors[0]);
    // }, error => {
    //   console.log("biiitch " + error);
    // }
    // );

    console.log(this.user);
  }

}
