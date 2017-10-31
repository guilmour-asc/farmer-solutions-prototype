import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the QuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
  providers: [
    AuthServiceProvider
  ]
})
export class QuestionnairePage {

  public category = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    this.authService.getCategoryData(0).subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      this.category = returnedObj[0];
      console.log(this.category["questionnaire"][0].sectors[0]);
    }, error => {
      console.log(error);
      this.authService.toastForFailed(error["status"]);
    }
    );
  }

}
