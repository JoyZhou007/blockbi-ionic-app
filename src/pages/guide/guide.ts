import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";

/**
 * Generated class for the GuideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@IonicPage({
  name: 'guide',
  segment: 'guide',
})
@Component({
  templateUrl: 'guide.html'
})
export class GuideComponent {

  text: string;

  constructor() {
    console.log('Hello GuideComponent Component');
    this.text = 'Hello World';
  }

}
