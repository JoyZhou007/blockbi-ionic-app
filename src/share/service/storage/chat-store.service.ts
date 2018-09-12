/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/1.
 */
import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {StoreService} from "./store.service";

@Injectable()
export class ChatStoreService extends StoreService {

  public static STORE_KEY_CHAT_CHANNEL_LIST = 'chat_channel_list';


  constructor(public storage: Storage) {
    super(storage);
  }


  /**
   * 存储chat-list
   */
  setChatChannelList(data) {
    return this.storage.set(ChatStoreService.STORE_KEY_CHAT_CHANNEL_LIST, data).then().catch();
  }

  /**
   * 获取chat-list
   */
  getChatChannelList(deal: Function): Promise<any> {
    return this.storage.get(ChatStoreService.STORE_KEY_CHAT_CHANNEL_LIST).then((v) => deal(v)).catch();
  }

  /**
   * 从缓存删除chat-list
   */
  removeChatChannelList() {
    return this.storage.remove(ChatStoreService.STORE_KEY_CHAT_CHANNEL_LIST).then().catch();
  }











}