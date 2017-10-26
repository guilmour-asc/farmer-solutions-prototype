import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public cardObject = {
    cardAvatar: "assets/images/misc/doggo.jpg",
    cardUser: "Heracles",
    cardDate: "November 5, 300 b.C.",
    cardImage: "assets/images/autumn.jpg",
    cardText: "Antaeus was supposed to fuck up my \"12 labors\" shit, bitching \'bout his invincibility and all... Well, fuck that, I knew he was Gaia's kiddo, so Antaeus and no ground would be my way to turn the table. He got lift, I smashed the shit outta him. I won. He lost. That fucking rooster...",
    cardLikes: 12,
    cardComments: 32,
    cardTimePast: "11h ago"
  }

  public movieList = new Array<any>();

  public username: string = "Heracles";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private MovieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  loadingShow() {
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, por favor..."
    });
    this.loader.present();
  }

  loadingHide() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadFeed();
  }

  ionViewDidEnter() {
    this.loadFeed();
  }

  loadFeed() {
    this.loadingShow();
    this.MovieProvider.getPopularMovies().subscribe(data => {
      const response = (data as any);
      const returnedObj = JSON.parse(response._body);
      this.movieList = returnedObj.results;
      console.log(returnedObj);
      this.loadingHide();
      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }, error => {
      console.log(error);
      this.loadingHide();
    })
  }

}
