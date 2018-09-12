/**
 * 搜索联系人列表
 */
export class ContactsList {
  static init() {
    return new ContactsList('', '', '', '', '', '', 0, 0, '', 0, 0, 0, 0, 0);
  }

  constructor(
    public user_profile_path: string,
    public work_name: string,
    public p_name: string,
    public uid: string,
    public uuid: string,
    public psid: string,
    public cid: number,
    public check: number,
    public company_name: string,
    public type: number,
    public form: number,
    public is_have_company: number,
    public online : number,
    public is_friend : number
  ) {}
}