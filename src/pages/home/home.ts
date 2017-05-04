import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about'

import {data} from './data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  users: any[];

  constructor(public navCtrl: NavController) {
    this.users = data;
  }

  navAbout(){
    this.navCtrl.push(AboutPage);
  }
}
