import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { CategoriesPage } from '../categories/categories';
import { LevelPage } from '../level/level';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = LevelPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
