import { Inject, Injectable } from "@angular/core";
import { UserModelService } from "../model/user-model.service";
import { Events } from "ionic-angular";
import { ContactsList, UserCompanyEntity, UserEntity } from "../../entity/user-entity";
import { EventNameConfig } from "../../config/event-name.config";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */


@Injectable()
export class UserService {

  constructor(private userModelService: UserModelService,
              private events: Events,
              @Inject('app.config') public appConfig: any,
              @Inject('user-store.service') public userStoreService: any,
              @Inject('notification-store.service') public notificationStoreService: any,
              @Inject('im.service') public imService: any) {

  }

  /**
   * 检测用户是否登录
   */
  checkIsLogin(deal: Function) {
    this.userStoreService.getSessionId(deal).then(() => {
      this.setLoginServiceData();
    });
  }

  /**
   * psid为纯数字, uuid为字符串
   * e.g
   *  123        true
   * '123'       true
   * 'AAAAAAAA'  false
   * @param uid
   * @returns {boolean}
   */
  isCompanyID(uid: any): boolean {
    return !isNaN(uid);
  }


  /**
   * 用户登录
   * @param data
   * @param callback
   */
  loginViaAPI(data: { username: string, password: string }, callback?: Function) {
    this.userModelService.login(data, (res: any) => {
      if (res.status == 1 && res.hasOwnProperty('data')) {
        // session, user, company
        // 通知app.component路由跳转
        this.userStoreService.setUserLoginData(
          res.data['session_id'],
          res.data['user'],
          res.data['companies_information']).then(() => {
          // TODO: set other service data;
          if (callback) {
            callback(res);
          }
          this.setLoginServiceData();
        });
      } else if (callback) {
        callback(res);
      }
    });

  }

  /**
   * 用户登出
   * @param callback
   */
  logoutViaAPI(callback?: Function) {
    this.userModelService.logout((res: any) => {
      if (res.status == 1 || res.status == -10001) {
        if (callback) {
          callback(res);
        }
        this.setLogoutServiceData();
      }
    });
  }

  /**
   * 用户注册
   * @param data
   * @param callback
   * @param timer 定时器
   */
  register(data: any, callback: Function, timer?: number) {
    this.userModelService.register(data, (res: any) => {
      if (res.status === 1) {  //注册成功
        this.events.publish(EventNameConfig.USER_LOGIN);
        this.userStoreService.setUserLoginData(
          res.data['session_id'],
          res.data['user'],
          res.data['companies_information']).then(() => {
          this.imService.initSocket();
          // TODO: set other service data;
          if (callback) {
            callback(res);
          }
        });
      } else {
        if (callback) {
          callback(res);
        }
      }

    });
  }

  /**
   * 从缓存拿contact list, 不然请求接口并且刷新缓存
   * @param deal
   */
  getContactList(deal: Function) {
    this.userStoreService.getContactList((v) => {
      if (!v) {
        this.fetchContactList((nv) => {
          if (deal) {
            deal(nv);
          }
        });
      } else {
        if (deal) {
          deal(v);
        }
      }
    });
  }

  /**
   * 从API获取联系人列表, 并且更新缓存
   * @param callback
   */
  fetchContactList(callback?: Function) {
    this.userModelService.getContactList({form: 0, group: 0}, (res: any) => {
      if (res.status === 1 && res.hasOwnProperty('data') && res.data.hasOwnProperty('staff')) {
        let staffList = res.data['staff'];
        let resArr = {
          Cooperator: [],
          Friend: [],
          Internal: []
        };
        for (let key in resArr) {
          if (staffList.hasOwnProperty(key)) {
            for (let i in staffList[key]) {
              if (staffList[key].hasOwnProperty(i)) {
                let tmpData = staffList[key][i];
                let tmpInfo: UserCompanyEntity;
                if (key == 'Cooperator' || key == 'Internal') {
                  tmpData.psid = tmpData.uid;
                } else if (key == 'Friend') {
                  tmpData.uuid = tmpData.uid;
                }
                delete tmpData.uid;
                tmpInfo = tmpData;
                resArr[key].push(tmpInfo);
              }
            }
          }
        }
        this.userStoreService.setContactList(resArr);
        callback(resArr);
      } else {
      }
    })
  }

  /**
   * 登陆后初始化相关数据
   */
  setLoginServiceData() {
    this.imService.initSocket();
    this.events.publish(EventNameConfig.USER_LOGIN);
    this.fetchContactList(() => {
      this.events.publish(EventNameConfig.CONTACT_IS_READY);
    });
  }

  /**
   * 退出后相关数据清除
   */
  setLogoutServiceData() {
    // 通知app.component路由跳转
    this.events.publish(EventNameConfig.USER_LOGOUT);
    this.imService.closeSocket();
    this.userStoreService.removeUserLoginData().then(() => {
      console.log('user login data cleaned');
    });
    this.notificationStoreService.removeAllNotificationData().then(() =>{
      console.log('user notification cleaned');
    });
  }

  /**
   *
   * @param uid 根据uuid或者psid查找用户信息
   * @param deal
   */
  searchOtherInfoInContactList(uid: any, deal?: Function) {
    // flag 是否为用户本人
    let isSelf = false;
    Promise.all([
      this.userStoreService.getCurrentUUID((v) => isSelf = uid == v),
      this.userStoreService.getCurrentPSID((v) => isSelf = isSelf || uid == v)
    ]).then(() => {
      if (isSelf) {
        this.userStoreService.getUserInfo((v) => {
          if (deal) {
            deal(isSelf, {
              work_name: v.work_name,
              user_profile_path: v.user_profile_path
            })
          }
        });
      } else {
        this.getContactList((contactList: {
          Cooperator: Array<ContactsList>,
          Friend: Array<ContactsList>,
          Internal: Array<ContactsList>
        }) => {
          let find;
          for (let key in contactList) {
            for (let i = 0; i < contactList[key].length; i++) {
              if (contactList[key][i].psid == uid || contactList[key][i].uuid == uid) {
                find = contactList[key][i];
                console.log('find in contact list', find, key);
                break;
              }
            }
          }
          if (deal) {
            if (find) {
              deal(isSelf, {
                work_name: find.work_name,
                user_profile_path: find.user_profile_path
              });
            } else {
              deal(isSelf, false);
            }
          }
        });
      }
    })

  }

  /**
   * 当前登录用户数据
   * @param callback
   */
  fetchCurrentUserInfo(callback?: Function) {
    let companyInfo: UserCompanyEntity, userInfo: UserEntity;
    let userData, companyData;
    Promise.all([
      this.userStoreService.getUserInfo((v) => userData = v),
      this.userStoreService.getUserCurrentCompany((v) => companyData = v)
    ]).then(() => {
      if (!(companyData && companyData.hasOwnProperty('cid') && companyData.cid != '')) {
        companyInfo = null;
      } else {
        // 现阶段API没有返回work_name, 默认使用私人name
        companyData.work_name = userData ? userData.work_name : '';
        companyData.company_name = companyData.name;
        delete companyData.name;
        companyInfo = companyData;
      }
      if (userData && userData.hasOwnProperty('user_profile_path') && userData.user_profile_path != '') {
        userData.user_profile_path = userData.user_profile_path;
      }
      userInfo = userData;
      if (callback) {
        callback(userInfo, companyInfo);
      }
    })
  }

  /**
   * 根据uid和分类查看contact detail详情
   */
  fetchContactDetailInfo(uid: any, module: string, callback: Function) {
    this.userModelService.fetchFriendInfo({uid: uid, personal_module: module}, (res: any) => {
      if (res.status == 1) {
        callback(res.data);
      } else {
        console.error(res);
      }
    });
  }

  /**
   * 查看另一个uid时候可以执行的权限操作
   * @param uid
   * @param callback
   */
  fetchContactPermission(uid: any, callback: Function) {
    this.userModelService.authorizationAccessInfo({data: {uid: uid}}, (res: any) => {
      if (res.status === 1 && res.hasOwnProperty('data')) {
        callback(res);
      }
    });
  }


  /**
   * 获得语言设置对应的数字
   * @return {any}
   */
  getLanguageNum() {
    //todo 语言设置
    //中文简体
    const CN = 'zh-Hans';
    //中文繁体
    // const TW_CN = 'zh-Hant';
    //英文
    const EN = 'en_US';
    let num = 'en';
    switch (num) {
      case 'zh-cn':
        num = CN;
        break;
      case 'en':
        num = EN;
        break;
    }
    return num;
  }
}
