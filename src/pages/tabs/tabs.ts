import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  // tab3Root = ;
  tab4Root = SettingsPage;

  constructor() {

  }
}
