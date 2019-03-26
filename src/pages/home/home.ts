import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChildOnePage } from '../child-one/child-one';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  gotoChild() {
    this.navCtrl.push(ChildOnePage);
  }
}
