import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  public loader;
  public category = new Array<any>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController) {
  }

  // goBack() {
  //   this.navCtrl.pop();
  // }

  loadingShow() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, por favor..."
    });
    this.loader.present();
  }

  loadingHide() {
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.loadingShow();
    console.log(this.navParams.get('category'));
    this.authService.getDatabase(this.navParams.get('category')).subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      for (let c of returnedObj["categories"]) {
        if(c["id"] == this.navParams.get('category')){
          this.category = c;
        }
      }
      this.loadingHide();
      console.log(this.category);
    }, error => {
      console.log(error);
      this.authService.toastForFailed(error["status"]);
      this.loadingHide();
      this.navCtrl.pop();
    }
    );
  }

  optionPressed(event) {
    console.log(event.originalTarget.value);
  }

  getAnswer(event) {
    console.log(event);
  }

  getInput(event) {
    console.log(event._value);
  }

}
