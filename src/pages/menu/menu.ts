import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainPage} from "../main/main";
import {HomePage} from "../vision/home";
import {DrugslistPage} from "../drugslist/drugslist";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  nearestPharmacy(){
    this.navCtrl.push(MainPage);
  }
  textdetection(){
    this.navCtrl.push(HomePage);
  }
  drugslist(){
    this.navCtrl.push(DrugslistPage);
  }

}
