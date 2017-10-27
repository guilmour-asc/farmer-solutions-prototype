import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Soil Healing",
      description: "Learn several techniques to restore and prepare the soil for agricultural purposes...",
      image: "assets/images/intro/earth-healing.png",
    },
    {
      title: "Water Resources",
      description: "Find your ways to gather, retain and purify water from distinct sources, without hassle...",
      image: "assets/images/intro/earth-healing.png",
    },
    {
      title: "Fair Use of Fire",
      description: "You can also learn techniques and tutorials for fire handling and avoidance of wildfires on the environment.",
      image: "assets/images/intro/earth-healing.png",
    }
];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToMain() {
    this.navCtrl.push(TabsPage)
  }

  loginPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Insira seu nome de usuário e senha.",
      inputs: [
        {
          name: 'username',
          placeholder: 'Nome de Usuário'
        },
        {
          name: 'password',
          placeholder: 'Senha',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Entrar',
          handler: data => {
            console.log('Login clicked');
            console.log(`user is ${data.username}, password is a secret...`);
            this.goToMain();
          }
        }
      ]
    });
    prompt.present();
  }

}
