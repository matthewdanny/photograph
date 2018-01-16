import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  type: string = "grid";

  constructor(public navCtrl: NavController) {

  }

  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }

}
