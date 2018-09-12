/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/21.
 */

export interface ChatMenu {
  form: number;
  gid: string;
  has_unread: number;
  invited_member: number;
  is_host: number;
  is_mission: number;
  mid: number;
  name: string;
  uid: string;
  user_profile_path: string;
  is_starred: boolean;
  is_Friend: boolean;
}

export interface ChatMessage {
  alarm_id: number;
  detail: any;
  effective_time: number;
  has_alarm: number;
  msg: string;
  msg_id: string;
  owner: string;
  pin_id: string;
  pinned: number;
  revoke_by: string;
  status: number;
  time: number;
  type: number;
  dayInfo: string;
  minuteInfo: string;
  isMerge: boolean;
  isSelf: boolean;
  user_info: any;
  date_time: string;
  safeMsg: string;
}

export interface FileDetail {
  ext: string,
  fid: string,
  file_name: string,
  file_type: string,
  updated: string
}

export interface PostDetail {
  attachments: number,
  fid: number,
  first_attachment: any,
  post_id: string,
  post_name: string
  updated: number
}

export interface ImageDetail {
  ext: string,
  fid: string,
  file_name: string,
  file_type: string,
  file_path: string
}


export interface ChatMessageForward {
  original_msg: {
    detail: any,
    msg: string,
    type: number,
    msg_id: string,
    owner: string,
    userInfo: any
  };
}

export interface ChatMessageShare {
    ext: string,
    fid: string,
    file_name: string,
    file_path: string,
    file_type: string,
    share_file_type: number,
    share_id: string
}


export interface ChatMessageSharePost {
  first_attachment: string,
  fid: string,
  post_name: string,
  post_id: string,
  share_file_type: number,
  share_id: string,
  summary:string,
  updated:string,
}
