/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/10/26.
 */

export interface FileModel {
  child: number,
  chn: number,
  created: string,
  id: number,
  did: number,
  email: string,
  ext_type: string,
  is_dir: number,
  is_starred: number,
  is_my_share: number,
  last: string,
  name: string,
  op: string,
  owner: string,
  parent_uid: string,
  path: string,
  pdid: number,
  perm_created: string,
  perm_id: string,
  perm_updated: string,
  privilege_type:string,
  profile: string,
  received: string,
  share_to_me:string,
  status: number,
  size: string,
  thumb_l: string,
  thumb_s: string,
  type: number,
  updated: string,
  work_name: string,
  fid: number,
  rid: number,
  parent_user_info: any,
  special_dir_top: number,
  ext: string
  is_selected:boolean,
}