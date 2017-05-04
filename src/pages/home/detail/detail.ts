import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'detail-post-home',
  templateUrl: 'detail.html'
})

export class Detail {
  item;

  constructor(
    public params: NavParams, 
  ) {
    this.item = params.data.item;
  }
}
