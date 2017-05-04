import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular'
import {Detail} from '../detail/detail'
import {AngularFire} from 'angularfire2'
import {HomePage} from '../home'
@Component({
  selector: 'create-post-home',
  templateUrl: 'create.html'
})

export class CreatePost{
  data: any = {};

  constructor(
    public af: AngularFire,
    public toast: ToastController,
    public nav: NavController, 
  ) {
      console.log('123');
  }

  createNewPost(){
      this.data._id = Date.now();

      if(!this.data.name || !this.data.about)
        return this.validate({data: this.data})

      this.af.database
        .list('0/home')
        .push(this.data)
        .then(res => this.nav.pop())
        .catch(err => console.log(500));
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
