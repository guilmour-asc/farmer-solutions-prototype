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

  public answer: boolean;
  public category = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider) {
  }

  // goBack() {
  //   this.navCtrl.pop();
  // }

  ionViewDidEnter() {
    // this.category = new Array<any>();
    console.log(this.navParams.get('category'));
    this.authService.getCategoryData(this.navParams.get('category')).subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      this.category = returnedObj;
      console.log(this.category);
    }, error => {
      console.log(error);
      this.authService.toastForFailed(error["status"]);
    }
    );
  }

  optionPressed(event){
    console.log(event.originalTarget.value);
  }

  getAnswer(event){
    console.log(event);
  }

}
