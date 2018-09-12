import { Component } from '@angular/core';

/**
 * Generated class for the NotificationHireComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-hire',
  templateUrl: 'notification-hire.html'
})
export class NotificationHireComponent {

  text: string;

  constructor() {
    // console.log('Hello NotificationHireComponent Component');
    this.text = 'Hello World';
  }

}
