import {Component, OnInit, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {EventNameConfig} from "../../share/config/event-name.config";

/**
 * Generated class for the PublicSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-select',
  templateUrl: 'public-select.html',
})
export class PublicSelectComponent implements OnInit {
  public optionData: any;  //从外部component 传过来的值
  public selectOptionArr: Array<any> = [];  //选择的数组
  public allDropDownOptionObj: any;
  private isHasChildrenGroup: boolean; //是否有子集分组
  public childTabArray: Array<any> = [];  //父级的选择tab 数组
  private parentTabArray: Array<any> = [];  //子级的选择tab 数组
  private displayChildTabArr: Array<any>;
  private currentDisplayGroupKey: string;
  private callBackComponentName: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public event: Events,
              @Inject('app.config') public appConfig: any) {
    this.selectOptionArr = this.navParams.data.selectedArray ? this.navParams.data.selectedArray : [];
    this.optionData = this.navParams.data.data;
    this.callBackComponentName = this.navParams.data.componentName;
  }


  ngOnInit(): void {
    if (!this.optionData) return;
    //判断如果没有childGroup 则只有一层分组 否则两层分组
    if (this.optionData.settings.childGroup.length) {
      this.isHasChildrenGroup = true;
      this.parentTabArray = this.optionData.settings.group;
      this.childTabArray = this.optionData.settings.childGroup;
      this.allDropDownOptionObj = this.optionData.groupObj;
      this.doShowChildTab(this.parentTabArray[0]); //子集tab 默认显示父级的第一个子集数组
    } else {
      this.isHasChildrenGroup = false;
      this.childTabArray = this.optionData.settings.group;
      this.displayChildTabArr = this.childTabArray;
      this.allDropDownOptionObj = this.optionData.groupObj;
      this.doShowSelectOption(this.childTabArray[0]);
    }
    this.getSelectedOption();
  }


  /**
   * 遍历选中的人
   */
  getSelectedOption() {
    for (let i in this.selectOptionArr) {
      for (let key in this.allDropDownOptionObj) {
        for (let j in this.allDropDownOptionObj[key]) {
          if (this.allDropDownOptionObj[key][j].id == this.selectOptionArr[i].id) {
            Object.assign(this.allDropDownOptionObj[key][j], this.selectOptionArr[i]);
            break;
          }
        }
      }
    }
  }


  /**
   * 选择item
   */
  selectTheItem(event: any, item: any) {
    event.stopPropagation();
    if (item.disabled) return;
    item.isCurrent = !item.isCurrent;
    if (item.isCurrent) {
      this.selectOptionArr.push(item);
    } else {
      for (let i in this.selectOptionArr) {
        if (this.selectOptionArr[i].id == item.id) {
          this.selectOptionArr.splice(parseInt(i), 1);
        }
      }
    }
    if (this.isHasChildrenGroup) {
      this.changeDisabled();
    }
  }


  /**
   * 确认选择
   */
  confirmSelection(event: any) {
    event.stopPropagation();
    this.event.publish(EventNameConfig.PUBLIC_SELECT, {param: this.callBackComponentName, data: this.selectOptionArr});
  }


  /**
   * 切换父级tab
   */
  switchParentTab(event: any, item: any) {
    event.stopPropagation();
    this.doShowChildTab(item);
  }


  /**
   * 切换子Tab
   */
  switchChildTab(event: any, item: any) {
    event.stopPropagation();
    this.doShowSelectOption(item);
  }


  /**
   * 显示的子集tab
   */
  doShowChildTab(parentGroup: any) {
    if (!parentGroup) return;
    for (let i in this.parentTabArray) {
      this.parentTabArray[i]['isActive'] = false;
    }
    parentGroup['isActive'] = true;
    this.displayChildTabArr = [];
    for (let i in this.childTabArray) {
      if (this.childTabArray[i].parentKey == parentGroup.key) {
        this.displayChildTabArr.push(this.childTabArray[i]);
      }
    }
    this.doShowSelectOption(this.displayChildTabArr[0]);
  }


  /**
   * 如果选择了personal 则business 所有option的 disabled 变为true 反之一样;
   */
  changeDisabled() {
    if (this.selectOptionArr.length) {
      for (let key in this.allDropDownOptionObj) {
        for (let i in this.allDropDownOptionObj[key]) {
          if (this.allDropDownOptionObj[key][i].group != this.selectOptionArr[0].group) {
            this.allDropDownOptionObj[key][i].disabled = true;
          }
        }
      }
    } else {
      for (let key in this.allDropDownOptionObj) {
        for (let i in this.allDropDownOptionObj[key]) {
          this.allDropDownOptionObj[key][i].disabled = false;
        }
      }
    }
  }


  /**
   * 显示每个分组的数据
   */

  doShowSelectOption(group: any) {
    if (!group) return;
    for (let i in this.childTabArray) {
      this.childTabArray[i]['isActive'] = false;
    }
    group['isActive'] = true;
    this.currentDisplayGroupKey = group.key;
  }

}
