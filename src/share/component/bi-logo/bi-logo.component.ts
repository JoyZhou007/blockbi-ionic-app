/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import { Component } from "@angular/core";
import { Events } from "ionic-angular";
import { EventNameConfig } from "../../config/event-name.config";

@Component({
  selector: 'bi-logo',
  template: `<img src="/assets/icon/bi-logo.png" (click)="goToHomepage()"/>`
})
export class BiLogoComponent {
  constructor(public event: Events) {

  }

  goToHomepage() {
    this.event.publish(EventNameConfig.ROUTER_TO, {toUrl: 'homepage'});
  }
}
