import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular'
import {Detail} from '../detail/detail'
import {AngularFire} from 'angularfire2'
import {HomePage} from '../home'
@Component({
  selector: 'create-post-home',
  templateUrl: 'edit.html'
})

export class EditPost{
  data: any = {};

  constructor(
    public af: AngularFire,
    public toast: ToastController,
    public nav: NavController, 
    public params: NavParams,
  ) {
      this.data = this.params.get('item');
  }

  editPost(){
    let data = this.data,
        post = {
            name: data.name,
            about: data.about,
            _id: data.about
        };
      
    if(!data.name || !data.about)
        return this.validate({data: data});

    this.af.database.object('0/home/' + this.data.$key).set(post);
    this.cancel();
  }

  validate(args){
    let field = '';

    if(!args.data.name){
      field = 'Name';
    }else{
      field = 'About';
    }

    this.showToast({field});
  }

  cancel(){
    this.nav.pop();
  }

  showToast(args){
    let toast = this.toast.create({
        message: args.field  + ' is required',
        duration: 1000
      });
    toast.present();
  }
}
