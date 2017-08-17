import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: string[] = ["Noah", "Liam", "Mason", "Jacob"];
  constructor(public navCtrl: NavController) {

  }

}
