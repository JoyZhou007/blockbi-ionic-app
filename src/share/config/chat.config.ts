/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/10.
 */
export const ChatConfig = {

  CHAT_MESSAGE_TYPE_AT_SYMBOL: '@',
//message 文本类型
  CHAT_MESSAGE_TYPE_TEXT: 1,
//图片消息
  CHAT_MESSAGE_TYPE_IMG: 2,
//文件消息
  CHAT_MESSAGE_TYPE_FILE: 3,
//post消息
  CHAT_MESSAGE_TYPE_POST: 4,
//系统消息, 如用户加入，退出群，修改群名，群话题
  CHAT_MESSAGE_TYPE_SYSTEM: 5,
//share文件消息
  CHAT_MESSAGE_TYPE_SHARE: 6,
//转发消息
  CHAT_MESSAGE_TYPE_FORWARD: 7,


  MESSAGE_TYPE_FRIEND: 1,	  //人与人消息
  MESSAGE_TYPE_GROUP: 2,	  //群组消息

  MESSAGE_TYPE_PRIVATE: 1, // uuid相关
  MESSAGE_TYPE_WORK: 2,    // psid相关

//chat-post draft分页没有更多数据
  CHATPOST_PAGER_ENDING: -1,

//chat-post forward copy or update
  CHAT_POST_FORWARD_COPY: '2',
  CHAT_POST_FORWARD_UPDATE: '1',

//chat-post draft分页没有更多数据
  CHAT_POST_COMMENT_PAGER_ENDING: -1,

//quill editor 字数限制
  CHAT_POST_QUILL_EDITOR_LIMIT: 9000,


  CHAT_SORT_UP: 1,

  CHAT_SORT_DOWN: -1
};





