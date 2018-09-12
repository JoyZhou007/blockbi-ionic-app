const biConfig = require('../../../config/bi-config.js');
const actEnv = biConfig.env + 'Config';
const APP_VERSION: number = biConfig[actEnv].APP_VERSION;
const domain: string = biConfig[actEnv].domain;
const resourceDomain: string = biConfig[actEnv].resourceDomain;
const resourceFolderDomain: string = biConfig[actEnv].resourceFolderDomain;
const resourceContactUsDomain: string = biConfig[actEnv].resourceContactUsDomain;
const apiDomain: string = biConfig[actEnv].apiDomain;
const socketDomain: string = biConfig[actEnv].socketDomain;
const requestByDomain: boolean = biConfig[actEnv].requestByDomain;
const debug: boolean = biConfig[actEnv].debug;
const apiPrefix: string = biConfig[actEnv].apiPrefix;
const backendDomain: string = biConfig[actEnv].backendDomain;


interface Config {
  env: string;
  appVersion: number,
  debug: boolean;
  locale: string;						//当前程序语言
  domain: string;							//网站主域名
  apiDomain: string;
  socketDomain: any; 				//socket服务 地址
  uploadUrl: string;					//上传图片路径
  uploadFileUrl: string;	//上传图片/文件路径
  uploadFolderUrl: string;
  resourceDomain: string;		//资源文件主域名
  resourceFolderDomain: string;
  resourceContactUsDomain: string;
  requestByDomain: boolean;
  userDefaultAvatar: string;	//用户默认头像
  licenceUrl: string;				//营业执照图片
  uploadImgSize: number;			//用户上传图片的大小 M来算
  notificationShowTime: number;	//消息通知的显示的时间(毫秒)
  chatMergeMessageTime: number;		//消息合并时间限制(毫秒)
  apiPrefix: string;
  socket: any;									//Socket 连接配置
  loadChatFragment: string;
  backendDomain: any;
  duplicateEntry: number;
  noLoginUrl: Array<string>;
}


export const AppConfig: Config = {
  env: biConfig.env,
  loadChatFragment: 'load-chat',
  appVersion: APP_VERSION,
  debug: debug,
  locale: 'zh-CHS',
  domain: domain,
  apiDomain: apiDomain,
  socketDomain: socketDomain,
  resourceDomain: resourceDomain,
  resourceFolderDomain: resourceFolderDomain,
  resourceContactUsDomain: resourceContactUsDomain,
  uploadUrl: '/api/file-save',
  uploadFileUrl: '/api/file-image-save',
  uploadFolderUrl: '/api/folder/file-upload',
  requestByDomain: requestByDomain,
  userDefaultAvatar: '/assets/images/upload-file-icon.jpg',
  licenceUrl: '/assets/images/company-cert.png',
  uploadImgSize: 2,	//M,
  notificationShowTime: 10000,
  chatMergeMessageTime: 30000,
  apiPrefix: apiPrefix,
  socket: {
    REPEAT_CONNECT: 5,	//断线重连时间(秒)
    MAX_REPEAT_NUMBER: 3, //最大重连次数
    KEEP_ONLINE_TIME: 25 	//用户没活跃(心跳保持时间,秒)
  },
  backendDomain: backendDomain,
  duplicateEntry: 1062,
  noLoginUrl: ['user/about', 'user/reset-psd', 'user/product']
};



