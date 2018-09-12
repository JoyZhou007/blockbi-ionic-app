/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
import {Inject, Injectable} from "@angular/core";
import {BaseModelService} from "./base-model.service";
import {ApiService} from "../api/api.service";

@Injectable()
export class UserModelService extends BaseModelService {
  constructor(@Inject(ApiService) public api: ApiService) {
    super(api);
  }

  /**
   * 登录
   * @param data
   * {
   *  username: string,
   *  password: string
   * }
   * @param callback
   */
  login(data: { username: string, password: string }, callback: Function) {
    this.getData('login', data, callback);
  }

  /**
   * 登出
   * @param callback
   */
  logout(callback: Function) {
    this.getData('logout', {}, callback);
  }

  /**
   * 注册
   * @param data
   * {
   *  profile: string, // 头像文件
   *  work_name: string,  // 个人姓名
   *  email: string,      // 邮箱
   *  phone: string,      // 手机
   *  password: string,   // 密码
   *  confirm_password: string, // 重复密码
   *  code: string,       // 手机验证码
   *  token?: string      // 推荐人推荐码
   * }
   * @param callback
   */
  register(data: {
    module: number,//第三方注册 默认0 为没有用第三方登录
    pid: string,//第三方账户的id
    profile: string, // 头像文件
    work_name: string,  // 个人姓名
    email: string,      // 邮箱
    phone: string,      // 手机
    password: string,   // 密码
    confirm_password: string, // 重复密码
    code: string,       // 手机验证码
    token?: string      // 推荐人推荐码
  }, callback: Function) {
    this.getData('register', data, callback);
  }

  /**
   * 切换公司
   * @param data
   * {
   *  cid: string
   * }
   * @param callback
   */
  switchCompany(data: any, callback?: any) {
    this.getData('switchCompany', data, callback);
  }


  /**
   * 重设权限
   * @param callBack
   */
  resetPermission(callBack: any) {
    this.getData('resetPermission', null, callBack);
  }

  /**
   * 联系我们表单
   * @param data
   * @param callBack
   */
  contactUs(data?: any, callBack?: any) {
    this.getData('contact', data, callBack);
  }

  //reset-password by token
  resetPassword(data?: any, callBack?: any) {
    this.getData('resetPsd', data, callBack);
  }


  /**
   * 重设密码
   * @param data
   * @param callBack
   */
  resetPwd(data?: any, callBack?: any) {
    this.getData('resetPassword', data, callBack);
  }

  //recover-password
  recoverPassword(data?: any, callBack?: any) {
    this.getData('recoverPsd', data, callBack);
  }

  //发送手机号获取验证码
  sendPhoneOrEmail(data?: any, callBack?: any) {
    this.getData('sendEmailOrPhone', data, callBack);
  }

  validateToken(data?: any, callBack?: any) {
    this.getData('checkToken', data, callBack);
  }

  /**
   * 检查用户在线状态
   * @param data {uid}
   * @param callback
   */
  getOnlineStatus(data?: any, callback?: any) {
    this.getData('getOnlineStatus', data, callback);
  }

  /**
   *
   * @param data
   * {
   *   data: {page: number}
   * }
   * @param callback
   */
  getHomepageDashboard(data?: { data: { page: number,order:number } }, callback?: any) {
    this.getData('getHomeDashboard', data, callback);
  }

  /**
   * new tips
   */
  newTips(data?: any, callBack?: any) {
    this.getData('createTips', data, callBack);
  }

  /**
   * update tips
   * data
   * {
   *
   * }
   */
  updateTips(data: {}, callBack?: any) {
    this.getData('modificationTips', data, callBack);
  }

  /**
   * delete tips
   */
  deleteTips(data?: any, callBack?: any) {
    this.getData('removeTips', data, callBack);
  }

  /**
   * since rid to show tips detail
   */
  showTipsDetail(data?: any, callBack?: any) {
    this.getData('showTipsDetailApi', data, callBack);
  }

  /**
   * 获取用户个人设置中心，权限、通知等相关设置   *
   * return
   * {
   *  'general':1,
   *  'contact':1,
   *  'chat':1,
   *  'mission':1,
   *  'file':1,
   *  'sound':1,
   *  'quantity':1
   * }
   * @param callback
   */
  getSettingNote(callback?: any) {
    this.getData('userGetSettingNote', null, callback);
  }

  /**
   * 设置用户个人设置中心，权限、通知等相关设置
   * @param data
   *  {
   *  'general':1,
   *  'contact':1,
   *  'chat':1,
   *  'mission':1,
   *  'file':1,
   *  'sound':1,
   *  'quantity':1
   *  }
   * @param callback
   */
  setSettingNote(data?: any, callback?: any) {
    this.getData('userSetSettingNote', data, callback);
  }

  getTimeLine(data?: any, callback?: any) {
    this.getData('achieveTimeLine', data, callback);
  }

  /**
   * 查看权限
   * @param data
   * @param callback
   */
  allocatedPrivilege(data?: any, callback?: any) {
    this.getData('userAllocatedPrivilege', data, callback);
  }

  /**
   * 设置权限
   * @param data
   * @param callback
   */
  grantPrivilege(data?: any, callback?: any) {
    this.getData('userGrantPrivilege', data, callback);
  }

  /**
   * 邀请人注册
   * @param data
   * @param callback
   */
  invitePeoples(data?: any, callback?: any) {
    this.getData('invitePeople', data, callback);
  }

  companyAttention(data?: any, callback?: any) {
    this.getData('companyAttention', data, callback)
  }

  attentionList(data?: any, callback?: any) {
    this.getData('attentionList', data, callback)
  }

  outOffice(data?: any, callback?: any) {
    this.getData('outOffice', data, callback)
  }

  /**
   *
   * @param data
   * @param callback
   */
  vacationList(data?: any, callback?: any) {
    this.getData('getVacationList', data, callback);
  }

  /**
   *
   * @param data
   * @param callback
   */
  vacationUsage(data?: any, callback?: any) {
    this.getData('applicationVacationUsage', data, callback);
  }

  /**
   *
   * @param data
   * @param callback
   */
  vacationDays(data?: any, callback?: any) {
    this.getData('remainingVacationDays', data, callback);
  }

  checkContainNationalHoliday(data?: any, callback?: any) {
    this.getData('containNationalHoliday', data, callback);
  }

//  添加国家法定假日

  createNationalHoliday(data?: any, callback?: any) {
    this.getData('createNationalHoliday', data, callback);
  }

//查看法定假日列表
  showNationalHoliday(data?: any, callback?: any) {
    this.getData('showNationalHoliday', data, callback);
  }

  //删除国家法定假日
  deleteNationalHoliday(data?: any, callback?: any) {
    this.getData('deleteNationalHoliday', data, callback)
  }

  //更新公司考勤时间
  updateNationalHoliday(data?: any, callback?: any) {
    this.getData('updateNationalHoliday', data, callback);
  }


//查看公司设置的时间
  showWorKTime(data?: any, callback?: any) {
    this.getData('showWorKTime', data, callback);
  }

  //新建公司考勤时间
  createWorKTime(data?: any, callback?: any) {
    this.getData('createWorKTime', data, callback);
  }


  //更新公司考勤时间
  updateWorKTime(data?: any, callback?: any) {
    this.getData('updateWorKTime', data, callback);
  }

//  显示员工考勤列表
  showAttendance(data: any, callback?: any) {
    this.getData('showAttendance', data, callback)
  }

  //显示员工详情
  showAttendanceDetail(data: any, callback?: any) {
    this.getData('showAttendanceDetail', data, callback)
  }

  //验证 验证码
  verifyAuthCode(data: any, callback?: any) {
    this.getData('testAuthCode', data, callback)
  }

  //申请更换邮箱 发送验证码
  applyChangeEmail(data: any, callback?: any) {
    this.getData('applyUpdateEmail', data, callback)
  }

  //申请更换邮箱
  changeEmail(data: any, callback?: any) {
    this.getData('updateEmail', data, callback)
  }

  //获取手机注册验证码
  fetchRegisterCode(data: any, callback?: any) {
    this.getData('getRegisterCode', data, callback)
  }

  //验证注册手机验证码
  verifyRegisterAuthCode(data: any, callback?: any) {
    this.getData('verifyRegisterCode', data, callback)
  }

  // 原contact model
  /**
   *
   * @param data
   * {
   * data: {uid: number}
   * }
   * @param callback
   */
  authorizationAccessInfo(data?: any, callback?: any) {
    this.getData('authorizationAccessInfo', data, callback);
  }

  /**
   * 获取联系人列表
   * @param data
   * {
   * form: 0,
   * group: 0}
   * @param callback
   */
  getContactList(data?: any, callback?: any) {
    this.getData('contactDisplay', data, callback);
  }

  contactSearch(data?: any, callback?: any) {
    this.getData('contactSearch', data, callback);
  }

  contactPermission(callback?: any) {
    this.getData('contactPermission', null, callback);
  }

  contactPermissionSave(data?: any, callback?: any) {
    this.getData('contactPermissionSave', data, callback);
  }

  /**
   *
   * @param data {
     * uid,
     * multi
   * }
   * @param callback
   */
  getUserInfo(data: any, callback?: any) {
    this.getData('userInfo', data, callback);
  }

  //查看两人之间的关系
  checkRelation(data: any, callback?: any) {
    this.getData('checkRelation', data, callback);
  }


  /**
   * 查看联系人
   */
  viewContact(data?: any): any {
    this.getData('viewContact', data);
  }

  /**
   * 获取被推荐人可以加什么类型好友
   * 0 => 加任何类型好友 1 => 加私人好友 2 => 加工作类型的好友
   * @param data
   * @param callback
   */
  checkRecommendRelation(data?: any, callback?: any): any {
    this.getData('checkRecommendRelation', data, callback);
  }

  /**
   * 获取好友信息
   * @param data
   * @param callback
   */
  getInCommon(data?: any, callback?: any): any {
    this.getData('getInCommon', data, callback);
  }

  /**
   * 删除好友
   * @param data
   * @param callback
   */
  removeFriends(data?: any, callback?: any): any {
    this.getData('removeFriends', data, callback);
  }

  /**
   * 获取招聘信息
   * @param data
   * @param callback
   */
  fetchOccupation(data?: any, callback?: any): any {
    this.getData('fetchOccupation', data, callback);
  }

  /**
   * 保存招聘
   * @param data
   * @param callback
   */
  saveOccupation(data?: any, callback?: any) {
    this.getData('saveOccupation', data, callback);
  }

  /**
   * 查看好友信息
   * @param data
   * {
   *  uid: string,
   *  personal_module: string  general|introduction|company_analysis|resume|analysis
   * }
   * @param callback
   */
  fetchFriendInfo(data: { uid: string, personal_module: string }, callback?: any): any {
    this.getData('fetchFriendInfo', {data: data}, callback);
  }

  /**
   * 查看个人信息
   * @param data
   * @param callback
   */
  userInfo(data?: any, callback?: any): any {
    this.getData('userInfo', data, callback);
  }

  /**
   * 检测是否已被招聘
   * @param data
   * @param callback
   */
  checkIsOccupation(data?: any, callback?: any): any {
    this.getData('checkIsOccupation', data, callback);
  }

  /**
   * 用户所有公司列表
   * @param data
   * @param callback
   */
  fetchUserCompany(data?: any, callback?: any): any {
    this.getData('fetchUserCompany', data, callback);
  }


  /**
   * 查看是否有hire权限 isHireUsers
   */
  isHireUsers(data?: any, callback?: any): any {
    this.getData('isHireUsers', data, callback);
  }

  /**
   * 匹配是否是本人的操作
   * uid
   * user 本地存储的用户数据
   */
  isSelf(uid: string, userData: any): boolean {
    return userData.user.uuid === uid || parseInt(userData.locationCompany.psid) === parseInt(uid);
  }

}
