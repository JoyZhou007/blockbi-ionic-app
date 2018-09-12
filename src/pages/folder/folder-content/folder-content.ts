import {Component, Output, EventEmitter, Inject, Input} from '@angular/core';
import {Platform, NavController, Events, LoadingController, Loading} from "ionic-angular";
import {FileModel} from "../../../share/entity/folder-entity";
import {FolderModelService} from "../../../share/service/model/folder-model.service";
import {EventNameConfig} from "../../../share/config/event-name.config";

/**
 * Generated class for the FolderContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'folder-content',
  templateUrl: 'folder-content.html'
})
export class FolderContentComponent {

  public isAndroid: boolean = false;
  private fileList: Array<FileModel> = [];
  private currentFileObj: FileModel;
  private parentFileObj: FileModel;
  private currentForm: number = 1;
  @Output() public outputEnterFolder = new EventEmitter<any>();
  @Output() public outputShowOpBtn = new EventEmitter<any>();
  private isLoading: boolean;
  private isListView: boolean;
  private isEditModel: boolean;
  private selectFileArray: Array<FileModel> = [];
  private loading: Loading;

  constructor(public platform: Platform,
              public loadingCtrl: LoadingController,
              private folderModelService: FolderModelService,
              private event: Events,
              @Inject('app.config') public  config,
              public navCtrl: NavController) {
    this.isAndroid = platform.is('android');
    this.currentFileObj = this.initFileModel();
    this.parentFileObj = this.initFileModel();
    this.currentFileObj.chn == -1;
  }


  /**
   * 页面初始化
   */
  ngOnInit(): void {
    this.fetchFolderList(this.currentForm);
  }


  @Input('refresh') set refresh(data: {
    isRefresh: true,
    refreshObj: any
  }) {
    if (data && data.hasOwnProperty('isRefresh') && data.isRefresh) {
      this.fetchFolderList(this.currentForm, this.currentFileObj.id);
      setTimeout(() => {
        data.refreshObj.complete();
      }, 1000);
    }
  }


  /**
   * 从API获取文件列表
   * @param form
   * @param pdid
   */
  fetchFolderList(form: number, pdid?: number) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.presentLoading();
    this.folderModelService.folderLists({
      form: form,
      pdid: pdid ? pdid : 0
    }, (res: any) => {
      if (res.status = 1) {
        this.event.publish(EventNameConfig.TOGGLE_TABS_BUTTON, {param: 'show-icon-tabs', data: {}});
        this.bindFileData(res.data);
        this.dismissLoading();
      } else {
      }
    })
  }


  /**
   * 加载器
   * 开始加载
   * @param content 内容
   * @param spinner
   */
  public presentLoading(content?: string, spinner?: string): void {
    if (!content) {
      content = 'Loading...';
    }
    if (!spinner) {
      spinner = 'bubbles';
    }
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: spinner
    });

    this.loading.present();
  }

  /**
   * 结束加载
   */
  public dismissLoading(): void {
    this.loading.dismiss();
  }


  initFileModel() {
    let obj: FileModel = {
      child: 0,
      chn: -1,
      created: '',
      id: 0,
      did: 0,
      email: '',
      ext_type: '',
      is_dir: 0,
      is_starred: 0,
      is_my_share: 0,
      last: '',
      name: '',
      op: '',
      owner: '',
      parent_uid: '',
      path: '',
      pdid: 0,
      perm_created: '',
      perm_id: '',
      perm_updated: '',
      privilege_type: '',
      profile: '',
      received: '',
      share_to_me: '',
      status: 0,
      size: '',
      thumb_l: '',
      thumb_s: '',
      type: 0,
      updated: '',
      work_name: '',
      fid: 0,
      rid: 0,
      parent_user_info: {},
      special_dir_top: 0,
      ext: '',
      is_selected: false
    };
    return obj;
  }


  /**
   *绑定文件对象
   */
  bindFileData(data: any) {
    this.isLoading = false;
    this.isEditModel = false;
    this.fileList = [];
    if (Array.isArray(data.sub)) {
      for (let i in data.sub) {
        let fileObj: FileModel = this.initFileModel();
        Object.assign(fileObj, data.sub[i]);
        this.fileList.push(fileObj);
      }
    }
    Object.assign(this.currentFileObj, data.current);
    Object.assign(this.parentFileObj, data.parent);
    this.outputEnterFolder.emit([this.parentFileObj, this.currentFileObj]);
  }


  /**
   * 切换文件类型
   * @param event
   * @param form
   */
  switchFolderType(event: any, form: number) {
    event.stopPropagation();
    if (this.currentForm != form) {
      this.currentForm = form;
      this.fetchFolderList(form);
    }
  }

  /**
   * 进入文件夹
   */
  enterTheFolder(event: any, file: FileModel) {
    event.stopPropagation();
    if (this.isEditModel) {
      file.is_selected = !file.is_selected;
      this.countSelectedFile(file);
    } else {
      if (file.is_dir) {
        this.fetchFolderList(file.type, file.id);
      }
    }
  }


  /**
   * 切换视图
   */
  switchViewType(event: any) {
    event.stopPropagation();
    this.isListView = !this.isListView;
  }

  /**
   * 切换到编辑模式
   */
  switchEditModel(event: any) {
    event.stopPropagation();
    this.isEditModel = !this.isEditModel;
    if (!this.isEditModel) {
      this.event.publish(EventNameConfig.TOGGLE_TABS_BUTTON, {param: 'show-icon-tabs', data: {}});
      for (let i in  this.selectFileArray) {
        this.selectFileArray[i].is_selected = false;
      }
    }
  }


  /**
   * 统计选择文件的个数
   */
  countSelectedFile(file: FileModel) {
    if (file.is_selected) {
      this.selectFileArray.push(file)
    } else {
      for (let i in this.selectFileArray) {
        if (this.selectFileArray[i].id == file.id) {
          this.selectFileArray.splice(parseInt(i), 1);
        }
      }
    }
    if (this.selectFileArray.length) {
      this.event.publish(EventNameConfig.TOGGLE_TABS_BUTTON, {param: 'hide-icon-tabs', data: {}});
      this.outputShowOpBtn.emit(this.selectFileArray);
    } else {
      this.event.publish(EventNameConfig.TOGGLE_TABS_BUTTON, {param: 'show-icon-tabs', data: {}});
      this.outputShowOpBtn.emit(this.selectFileArray);
    }
  }

  /**
   * 处理PIN后续操作
   */
  dealPinOperation(data: Array<number>, way: string) {
    for (let i  in data) {
      for (let k in this.fileList) {
        if (this.fileList[k].is_dir == 1 && this.fileList[k].id == data[i]) {
          if (way == 'add') {
            this.fileList[k].is_starred = 1;
          } else if (way == 'del') {
            this.fileList[k].is_starred = 0;
          }
        }
      }
    }
  }

  /**
   * 清空数据对象
   */
  clearData() {
    this.selectFileArray = [];
    for (let i  in this.fileList) {
      this.fileList[i].is_selected = false;
    }
  }


}
