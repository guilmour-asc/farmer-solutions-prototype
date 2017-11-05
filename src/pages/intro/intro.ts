import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
      title: "Bem-vindo!",
      description: "Este aplicativo visa ajudar produtores rurais, desenvolvendo estratégias dinâmicas de otimização de produção com mínimo dano ambiental.",
      image: "assets/images/intro/slide-1.png",
    },
    {
      title: "Defina suas áreas de produção...",
      description: "Seja colheita de café, cacau, criação de gado de corte ou leite ou até aquicultura, você auto-avaliará seu trabalho de acordo com a sua área de interesse.",
      image: "assets/images/intro/slide-2.png",
    },
    {
      title: "... Receba um plano de ação.",
      description: "Com base na auto-avaliação, será gerado um plano de ação, o qual vai alavancar sua produção, preservar melhor o meio-ambiente e garantir o sustento da comunidade.",
      image: "assets/images/intro/slide-3.png",
    },
    {
      title: "Biblioteca",
      description: "Se precisar consultar algum documento de apoio ou até legislação, o aplicativo dá acesso a tais documentos, a poucos cliques!",
      image: "assets/images/intro/slide-4.png",
    }
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  goToMain() {
    this.navCtrl.push(LoginPage);
  }

}
