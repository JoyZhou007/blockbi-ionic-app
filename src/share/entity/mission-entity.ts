export interface MissionListFilter {
  page_no_todo: string;  // start from 1, -1代表读取完毕
  page_no_doing: string; // start from 1
  page_no_done: string;  // start from 1
  page_no_storage: string; // start from 1
  page_no_schedule: string; // start from 1
  type: Array<string>;  //["-1"] -1是all, 1~5
  // public date_start: string;
  // public date_end: string;
  current_date: string;
  is_self: string; // -1-all, 0-Yours, 1-Others
  page_no_pause: string;// start from 1

}

/**
 * Mission列表模型 用于和后端交互
 */
export interface MissionListAPIModel {
  mode: string;
  filter: MissionListFilter;
  missions: {
    todo: Array<MissionDetailAPIModel>
    doing: Array<MissionDetailAPIModel>
    done: Array<MissionDetailAPIModel>
    storage: Array<MissionDetailAPIModel>
    pause: Array<MissionDetailAPIModel>
  };
  missions_schedule: any;


}


/**
 *  Mission详情模型 用户和后端交互
 */
export interface MissionDetailAPIModel {
  available_btns: any; //显示buttons
  roles: Array<any>; //身份是逗号分隔的
  folder_id: string; // 创建的文件夹id
  mid: any; // 主表id
  id: any;  // 分表id
  type: string;
  name: string;
  promoted: string; // 0 1;
  description: string;
  project_token?: string; // 只有从Project中创建的时候才需要此字段,
  project_id?: string; // 当project创建完毕后，关联的project id
  start: string; // 设定开始时间点
  start_timestamp: string; // 设定开始时间戳
  real_start: string; //项目实际的开始时间点
  real_start_timestamp: string; //项目实际的开始时间戳
  end: string;  //  设定结束时间点
  end_timestamp: string; // 设定结束时间戳
  real_end: string; //项目变成done的时间点
  real_end_timestamp: string; //项目变成done的时间戳
  mission_status: string;
  isReset: boolean;
  status: string; //project子mission的状态
  has_alarm: boolean; //是否有闹钟
  alarm_id: string; //闹钟id
  effective_time: number; //闹钟具体时间 UTC
  repeat: number; //闹钟重复 1天  2周  3月
  every: number; //每几 天/周/月
  alarm_type: number; //闹钟类型  fix/repeat
  effective_time_display: string; //闹钟显示时间
  general_token: string;
  // 五种类型mission的不同字段
  detail: any;
  // 开启的方法功能
  fns: { [key: string]: any };
  // 最后状态变更信息
  last_update_info: {
    user_info: MissionUserInfo,
    time: string,
    time_str: string
  };
  // 是否延期状态
  delayed: string; // 1 - 正常 || 0 - 延期
  link_info: MissionLinkModel;
  pending_issue: any; //TODO: 用户能看到的
  creator_info: {
    user_info: MissionUserInfo,
    time: string,
    time_str: string
  };
  date_period: string; // 如果没有时长 默认为0
  pin_list: Array<{
    identifier: '',
    pin_time: '2017-03-27 16:23:22',
    user_info: MissionUserInfo,
    description: ''
  }> ;
  is_observer: number; // 是否是抄送的人0 | 1, 抄送人不能够参与mission的聊天, 需要隐藏字段


}


export interface MissionUserInfo {
  psid: string; // 职位id
  user_profile_path: string;
  name: string; //
  p_name: string;// 职位名字
}


/**
 * Mission 连接模型
 */
export interface MissionLinkModel {
  before: Array<MissionDetailAPIModel>; // 只有一个. create状态下只能编辑这个
  after: Array<MissionDetailAPIModel>;  // 可以多个，只能显示，无法控制

}


/**
 *  tips mission entity 前端用
 */
export interface MissionDetail {
  created_timestamp: number; //创建时间timestamp
  createDetailTime: string; //显示用
  has_alarm: number; // 1 or 0
  alarm_id: string;
  type: string; // 1 个人 2公司
  effective_time: any;
  effective_time_display: string;
  creator_info: {user_info: any}; //创建mission信息 todo
  name: string;
  status: string;
  id: string;
  real_start_timestamp: number; //开始时间
  real_end_timestamp: number; //结束时间
  level: string,
  startShow: {  //显示开始时间
    day: string,
    month: string,
    hour: string
  };
  endShow: {   //显示结束时间
    day: string,
    month: string,
    hour: string
  };
  missionType: string; //显示mission的类型
  description: string; //mission描述
  endIsPending: boolean//结束是否是pending

  // 时间进度条相关信息
  todoProgressTime: string; //项目跨度时间长度(透明部分)
  doingProgressTime: string; //项目跨度时间长度(正在进行部分)
  doneProgressTime: string; //项目跨度时间长度(已经完成部分)
  fillLengthTodo: string ;
  fillLengthDoing: string ;
  fillLengthDone: string;
  fillColorTodo: string ;
  fillColorDoing: string ;
  fillColorDone: string;
  fillColorLink: string;
  fillColorDoneAppli: string ;
  fillColorProAppli: string;
  fillColorWhite: string ;
  FillColorLine: string;
}









