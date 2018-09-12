/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/10/31.
 */

export interface selectOptionModel {
  id: any ; // 唯一标识
  isCurrent: boolean ;
  hasFiltered: boolean;
  key: any ; //work_name
  label: string ;  // '' - 空值，不显示 | 'http://XXXX.png' 显示小图片 | 'NaN' 显示首字母
  imageLabel: string;
  desc: string ;
  group: string;
  childGroup: string;
  disabled: boolean;
  isAbleRemove:boolean;
}

export interface selectSettings {
  enableSearch: boolean;
  isMultiple: boolean;
  group: Array<{key: any, title: any}>;
  childGroup: Array<{key: any, title: any, parentKey: any}>;
  // delBtnClass: string ;
  // delBtnClass1: string ;
  readonly: boolean;
  // addEvent: any ;
  // removeEvent: any ;
  searchPH: string;
}
