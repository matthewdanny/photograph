import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { LikePage } from '../like/like';
import { PlaceListPage } from '../place-list/place-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = ProfilePage;
  tab4Root = PlaceListPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
