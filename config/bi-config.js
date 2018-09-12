exports.env = 'local';

exports.localConfig = {
  APP_VERSION: '0.0.1',
  domain: 'http://localhost/',
  apiPrefix:'api',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain:  'http://devapi.blockbi.com/',
  resourceContactUsDomain:  'http://devadmin.blockbi.com/',
  socketDomain:'ws://192.168.1.100:9988/',
  requestByDomain: false,
  apiDomain : 'http://devapi.blockbi.com',
  debug: true,

};

exports.devConfig = {
  APP_VERSION: '0.0.1',
  domain: 'http://devapi.blockbi.com/',
  apiPrefix:'api',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain:  'http://devapi.blockbi.com/',
  resourceContactUsDomain:  'http://devadmin.blockbi.com/',
  socketDomain:'ws://192.168.1.100:9988/',
  requestByDomain: true,
  apiDomain : 'http://devapi.blockbi.com',
  debug: true
};

exports.uatConfig = {
  APP_VERSION: '0.0.1',
  domain: 'https://uatwww.blockbi.com/',
  apiPrefix:'api',
  resourceDomain: 'https://uatapi.blockbi.com/',
  resourceFolderDomain:  'https://uatapi.blockbi.com/',
  resourceContactUsDomain:  'http://uatadmin.blockbi.com/',
  socketDomain:'wss://uatapi.blockbi.com/',
  requestByDomain: true,
  apiDomain : 'https://uatapi.blockbi.com',
  debug: false
};

// exports.prodConfig = {
//   APP_VERSION: '0.0.1',
//   domain: 'http://localhost/',
//   apiPrefix:'api',
//   resourceDomain: 'http://devapi.blockbi.com/',
//   resourceFolderDomain:  'http://devapi.blockbi.com/',
//   socketDomain:'ws://dev-bi-im.blockbi.com:9988/',
//   requestByDomain: true,
//   apiDomain : 'http://devapi.blockbi.com',
//   debug: false
// };
