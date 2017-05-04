import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
// modules
import {AboutPage} from '../about/about'
import {AngularFire} from 'angularfire2'
import {ActionSheetController} from 'ionic-angular'
import {Detail} from './detail/detail'
import {CreatePost} from './create/create'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  lists;

  constructor(
    public af: AngularFire,
    public nav: NavController
  ) {
    this.lists = this.af.database.list('/0/home');
  }

  navAbout(){
    this.lists.push({
      _id: Date.now(),
      name: 'new user form local',
      about: 'simple text from local',
      index: 7,
    })
  }

  updateList(e){
    this.af.database.object('0/home/' + e.$key).set({
      _id: '1212',
      name: 'Peace of Peace',
      about: 'Story about kapko'
    });
  }

  removeList(e){
    this.af.database.object('0/home/' + e.$key)
      .remove()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  detailPage(list){
    this.nav.push(Detail, {item: list});
  }
  newPost(){
    this.nav.push(CreatePost, {});
  }
}

