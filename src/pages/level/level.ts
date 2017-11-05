import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
})
export class LevelPage {

  public user = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
    console.log(Array.from(Array(this.user["subscribedIn"][0]["categoryLevel"]).keys()));
  }

  starQuantity(N){
    return Array.from(Array(N).keys());
  }

}
