import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

@IonicPage({
  name: 'logout',
  segment: 'logout'
})
@Component({
  templateUrl: 'logout.html'
})
export class LogoutPage {
  constructor(public navCtrl: NavController) {

  }

}
