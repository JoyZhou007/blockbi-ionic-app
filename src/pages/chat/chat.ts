import {Component} from "@angular/core";
import {IonicPage, NavController, Events, ModalController} from "ionic-angular";
import {ChatNewChannelComponent} from "../chat-new-channel/chat-new-channel";
import {EventNameConfig} from "../../share/config/event-name.config";

@IonicPage({
  name: 'chat',
  segment: 'chat'
})
@Component({
  templateUrl: 'chat.html'
})
export class ChatPage {
  public testMsg: string = '';

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public events: Events) {

  }

  ngAfterViewInit() {
    this.dealEvent();
  }


  closeSocket() {

  }


  dealEvent() {
    this.events.subscribe(EventNameConfig.NEW_CHANNEL, (params: any) => {
      let param = params.param;
      switch (param) {
        case 'new-channel' :
          let modal = this.modalCtrl.create(ChatNewChannelComponent);
          modal.present();
          break;
      }
    });

  }

  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.NEW_CHANNEL);
  }

}


