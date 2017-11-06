import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
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
  public questionQuantity = 0;
  public answers = {
    "username": this.navParams.get('username'),
    "category": this.navParams.get('category'),
    "list": []
  };
  public answerForm = {
    "questionId": "",
    "questionText": "",
    "questionAnswer": ""
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
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
        if (c["id"] == this.navParams.get('category')) {
          this.category = c;
        }
      }
      this.loadingHide();
      console.log(this.category);
      // Counting how many questions...
      for (var i = 0; i < this.category["questionnaire"].length; i++) {
        for (var j = 0; j < this.category["questionnaire"][i]["sectors"].length; j++) {
          for (var k = 0; k < this.category["questionnaire"][i]["sectors"][j]["questions"].length; k++) {
            this.questionQuantity++;
          }
        }
      }
    }, error => {
      console.log(error);
      this.authService.toastForFailed(error["status"]);
      this.loadingHide();
      this.navCtrl.pop();
    }
    );
  }

  promptIncompleteQuestionnaire() {
    let prompt = this.alertCtrl.create({
      title: 'Questionário Incompleto',
      message: `Você respondeu <b>${this.answers.list.length}</b> de <b>${this.questionQuantity}</b> perguntas.<br>Deseja sair do questionário?`,
      buttons: [
        {
          text: 'Não',
          handler: data => {
            
          }
        },
        {
          text: 'Sim',
          handler: data => {
            localStorage.setItem('answers', JSON.stringify(this.answers));
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }

  /* Function to clear the Form of the answer,
  otherwise, the answer list becomes a list of same items... */
  public cleanAnswerForm() {
    return {
      "questionId": "",
      "questionText": "",
      "questionAnswer": ""
    };
  }

  /* Everytime I answer a question, this function verifies (and updates)
     the answer on the Answers List, avoiding repeats of questions*/
  answersListControl(questionId) {
    for (var i = 0; i < this.answers.list.length; i++) {
      if (this.answers.list[i]["questionId"] == questionId) {
        this.answers.list.splice(i, 1);
      }
    }
  }

  getBoolean(questionId, questionText, event) {
    this.answerForm = this.cleanAnswerForm();
    this.answerForm.questionId = questionId;
    this.answerForm.questionText = questionText;
    this.answerForm.questionAnswer = event.target.value;
    this.answersListControl(this.answerForm.questionId);
    this.answers.list.push(this.answerForm);
    console.log(this.answers);
  }

  getOption(questionId, questionText, event) {
    this.answerForm = this.cleanAnswerForm();
    this.answerForm.questionId = questionId;
    this.answerForm.questionText = questionText;
    this.answerForm.questionAnswer = event;
    this.answersListControl(this.answerForm.questionId);
    this.answers.list.push(this.answerForm);
    console.log(this.answers);
  }

  getInput(questionId, questionText, event) {
    this.answerForm = this.cleanAnswerForm();
    this.answerForm.questionId = questionId;
    this.answerForm.questionText = questionText;
    this.answerForm.questionAnswer = event.target.value;
    this.answersListControl(this.answerForm.questionId);
    this.answers.list.push(this.answerForm);
    console.log(this.answers);
  }

  storeAnswers() {
    if (this.answers.list.length !== 0) {
      if (this.answers.list.length < this.questionQuantity) {
        this.promptIncompleteQuestionnaire();
      } else {
        localStorage.setItem('answers', JSON.stringify(this.answers));
        this.navCtrl.pop();
      }

    } else {
      let toast = this.toastCtrl.create({
        message: "Você não respondeu nenhuma questão...",
        duration: 2000,
        position: 'middle'
      });
      toast.present();
    }
  }

}
