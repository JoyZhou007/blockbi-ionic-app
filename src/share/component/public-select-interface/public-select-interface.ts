import {Component, Input, Inject, EventEmitter, Output} from '@angular/core';
import {ModalController, Events} from 'ionic-angular';
import {selectOptionModel} from "../../entity/select-entity";
import {PublicSelectComponent} from "../../../pages/public-select/public-select";
import {EventNameConfig} from "../../config/event-name.config";

/**
 * Generated class for the PublicSelectInterfaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'public-select-interface',
  templateUrl: 'public-select-interface.html'
})
export class PublicSelectInterfaceComponent {

  public selectItemArray: Array<selectOptionModel> = [];
  private publicDropDownObj: any;
  public readOnly: boolean;

  @Output() public outPutSelectChange = new EventEmitter<any>();


  constructor(public modalCtrl: ModalController,
              public events: Events,
              @Inject('app.config') public  appConfig: any) {
    this.dealEvent();
  }


  @Input() set dropDownOption(param: any) {
    if (param) {
      this.publicDropDownObj = param;
      this.readOnly = this.publicDropDownObj.settings.readonly
    }
  }

  @Input() set selectedOption(param: Array<selectOptionModel>) {
    if (param) {
      this.selectItemArray = param;
    }
  }

  ngOnDestroy() {
    this.events.unsubscribe(EventNameConfig.PUBLIC_SELECT);
  }


  /**
   * 处理事件
   */
  dealEvent() {
    //选择事件
    this.events.subscribe(EventNameConfig.PUBLIC_SELECT, (params: any) => {
      this.selectItemArray = params.data;
      this.outPutSelectChange.emit(this.selectItemArray);
    });
  }


  /**
   * 点击选择
   */
  showPublicSelect(event: any) {
    event.stopPropagation();
    if(this.readOnly) return;
    let modal = this.modalCtrl.create(PublicSelectComponent, {
      data: this.publicDropDownObj,
      selectedArray: this.selectItemArray
    });
    modal.present();
  }


  /**
   * 删除选中项
   */
  deleteSelected(event: any, item: any) {
    event.stopPropagation();
    if(this.readOnly) return;
    item.isCurrent = false;
    for (let i in this.selectItemArray) {
      if (this.selectItemArray[i].id == item.id) {
        this.selectItemArray.splice(parseInt(i), 1);
      }
    }
    this.outPutSelectChange.emit(this.selectItemArray);
  }


}
