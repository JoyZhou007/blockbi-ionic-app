/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/17.
 */

export interface UserEntity {
  work_name: string;
  email: string;
  phone: string;
  uuid: string;
  user_profile_path: string;
}

export interface UserCompanyEntity {
  cid: string;
  work_name: string;
  company_name: string;
  p_name: string;
  permission: Array<string>;
  // 公司职位ID
  psid: string;
  // 角色身份
  role: Array<string>;
  // 公司信息身份表示
  suid: string;
  // 是否是CEO 超级管理员 1是 0不是
  super_admin: number;
  // 子公司 主公司 分公司(废弃)
  type: string;
}


/**
 *
 */
/**
 * 搜索联系人列表
 */
export interface ContactsList {
  user_profile_path: string;
  work_name: string;
  p_name: string;
  uid: string;
  uuid: string;
  psid: string;
  cid: number;
  check: number;
  company_name: string;
  type: number;
  form: number;
  is_have_company: number;
  online: number;
  is_friend: number;
}

/**
 * 注册用户数据实体
 */
export interface UserRegisterData {
  module: number; //第三方注册 默认0 为没有用第三方登录
  pid: string; //第三方账户的id
  work_name: string;
  email: string;
  profile: string;
  password: string;
  phone: string;
  code: string;
  confirm_password: string;
  lang: string,
  token?: string; //邀请注册
}


/**
 * tips用户数据实体
 */
export interface TipsUserData {
  work_name: string,
  user_profile_path: string,
  uid: string  //uid / uuid / psid
}

/**
 *  tips entity 前端用
 */
export interface Tips {
  content: string;
  created: number; //创建时间timestamp
  createDetailTime: string; //显示用
  form: string;  //tip有form: 3，mission没有form
  rid: string;   //删除时的tips id
  shared_to: Array<any>;
  sharedToInfoList: Array<any>;
  has_alarm: number; // 1 or 0
  alarm_id: string;
  owner: string;
  type: string; // 1 个人 2公司
  effective_time: any;
  effective_time_display: string;
  ableEdit: boolean;
  ownerInfo: TipsUserData;//owner信息
  couldEdit: boolean;
}
/**
 *  tips mission entity 前端用  todo：修改为mission detail
 */
export interface TipsMission {
  created_timestamp: number; //创建时间timestamp
  createDetailTime: string; //显示用
  has_alarm: number; // 1 or 0
  alarm_id: string;
  type: string; // 1 个人 2公司
  effective_time: any;
  effective_time_display: string;
  creator_info: {user_info: TipsUserData}; //创建mission信息
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

