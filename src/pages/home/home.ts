import { Component } from '@angular/core'
import { NavController, ToastController } from 'ionic-angular'
// modules
import {AboutPage} from '../about/about'
import {AngularFire} from 'angularfire2'
import {ActionSheetController} from 'ionic-angular'
import {Detail} from './detail/detail'
import {CreatePost} from './create/create'
import {EditPost} from './edit/edit'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  lists;

  constructor(
    public af: AngularFire,
    public toast: ToastController,
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

  removePost(e){
    this.af.database.object('0/home/' + e.$key)
      .remove()
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.showToast({});
  }

  detailPage(list){
    this.nav.push(Detail, {item: list});
  }

  newPost(){
    this.nav.push(CreatePost, {});
  }

  editPost(list){
    this.nav.push(EditPost, {item: list})
  }

  showToast(args){
    let toast = this.toast.create({
        message: 'Removed!',
        duration: 3000,
      });
    toast.present();
  }
}

