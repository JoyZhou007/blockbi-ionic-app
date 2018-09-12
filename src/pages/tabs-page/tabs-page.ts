import { Component, ViewChild } from "@angular/core";

import { Events, IonicPage, NavParams, Tabs } from "ionic-angular";
import { BiFabBtnsComponent } from "../../share/component/index";
import { EventNameConfig } from "../../share/config/event-name.config";


@IonicPage({
  name: 'tabs-page',
  segment: 'tabs-page'
})
@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  // set the root pages for each tab
  tab1Root: any = 'home';
  tab2Root: any = 'chat';
  tab3Root: any = 'folder';
  tab4Root: any = 'mission-list';
  mySelectedIndex: number;
  @ViewChild('BiFooter') BiFooter: BiFabBtnsComponent;
  @ViewChild('tabs') tabs: Tabs;
  private isHideTabs: boolean;

  constructor(public  navParams: NavParams,
              public events: Events) {
    this.mySelectedIndex = this.navParams.data.tabIndex || 0;
  }

  ionViewWillEnter(): void {
    console.log('tab page ionViewWillEnter');
    this.events.publish(EventNameConfig.TAB_PAGE_ENTERED);
    this.dealEvent();
  }


  ionViewWillUnload(): void {
    console.log('tab page ionViewWillUnload');
  }

  ionViewDidLeave(){
    console.log('tab page ionViewDidLeave');
    if (this.events) {
      this.events.unsubscribe(EventNameConfig.TOGGLE_TABS_BUTTON);
    }
  }


  /**
   * 处理事件通知
   */
  dealEvent() {
    this.events.subscribe(EventNameConfig.TOGGLE_TABS_BUTTON, (params: any) => {
      let param = params.param;
      switch (param) {
        case 'hide-icon-tabs' :
          this.isHideTabs = true;
          break;
        case 'show-icon-tabs' :
          this.isHideTabs = false;
          break;
      }
    });
  }


  rebuildButtons(tabs: any) {
    this.BiFooter.initButtons(tabs);
  }


}
