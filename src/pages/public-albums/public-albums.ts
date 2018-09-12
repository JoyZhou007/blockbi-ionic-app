import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LibraryItem, PhotoLibrary} from "@ionic-native/photo-library";

/**
 * Generated class for the PublicAlbumsComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-albums',
  templateUrl: 'public-albums.html',
  providers:[PhotoLibrary]
})
export class PublicAlbumsComponent {

  public imageArray: Array<LibraryItem> = [];

  constructor(public navCtrl: NavController,
              private photoLibrary: PhotoLibrary,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicAlbumsComponent');
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          console.log('&&&&&&&&&&&&&', library)
          this.imageArray = library;
        },
        error: err => {
          console.log('could not get photos');
        },
        complete: () => {
          console.log('done getting photos');
        }
      });
    })
      .catch(err => console.log('permissions weren\'t granted'));
  }

}
