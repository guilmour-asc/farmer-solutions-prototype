import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionnairePage } from '../questionnaire/questionnaire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public page = QuestionnairePage;
  public choice;
  public enabler: boolean = false;

  constructor(public navCtrl: NavController) {
  }

  buttonEnableOrNot() {
    if (this.choice) {
      this.enabler = true;
    } else {
      this.enabler = false;
    }
  }

  goToQuestionnaire() {
    console.log(this.choice);
    this.navCtrl.push(QuestionnairePage, {category: this.choice});
  }

}
