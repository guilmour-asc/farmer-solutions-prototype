import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public cardObject = {
    cardAvatar: "assets/images/doggo.jpg",
    cardUser: "Heracles",
    cardDate: "November 5, 300 b.C.",
    cardImage: "assets/images/autumn.jpg",
    cardText: "Antaeus was supposed to fuck up my \"12 labors\" shit, bitching \'bout his invincibility and all... Well, fuck that, I knew he was Gaia's kiddo, so Antaeus and no ground would be my way to turn the table. He got lift, I smashed the shit outta him. I won. He lost. That fucking rooster...",
    cardLikes: 12,
    cardComments: 32,
    cardTimePast: "11h ago"
  }

  public username:string = "Heracles";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public shittyFunction(a:number, b:number): void{
    alert(a+b);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.shittyFunction(12, 20);
  }

}
