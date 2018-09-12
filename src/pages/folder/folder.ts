import {Component, OnInit, ViewChild} from "@angular/core";
import {IonicPage, NavController, Events, ActionSheetController} from "ionic-angular";
import {FolderModelService} from "../../share/service/model/folder-model.service";
import {FileModel} from "../../share/entity/folder-entity";
import {AlertController} from 'ionic-angular';
import {EventNameConfig} from "../../share/config/event-name.config";

@IonicPage({
  name: 'folder',
  segment: 'folder'
})
@Component({
  templateUrl: 'folder.html',
  providers: [FolderModelService]
})
export class FolderPage implements OnInit {

  private isTopFolder: boolean = true;
  private currentForm: number = 1;
  private currentFileObj: FileModel;
  private parentFileObj: FileModel;
  private isShowOpBtn: boolean;
  @ViewChild('folderContent') public folderContent: any;
  private selectedFileArray: Array<FileModel>;
  private selectedObj: {fileArray: Array<FileModel>; folderArray: Array<FileModel>; fileIdArray: Array<number>; folderIdArray: Array<number>};
  private isRefresh: {
    isRefresh: true,
    refreshObj: any
  };

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private events: Events,
              public actionSheetCtrl: ActionSheetController,
              public folderModelService: FolderModelService) {
  }

  ngOnInit() {
    this.selectedObj = {
      fileArray: [],
      folderArray: [],
      fileIdArray: [],
      folderIdArray: []
    }
  }

  ngAfterViewInit() {
    this.dealEvent();
  }

  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.UPLOAD_FILE);
  }


  dealEvent() {
    this.events.subscribe(EventNameConfig.UPLOAD_FILE, (params: any) => {
      let param = params.param;
      switch (param) {
        case 'upload-file' :
          this.presentActionSheet();
          break;
      }
    });
  }


  /**
   * 进入文件夹
   * @param data
   */
  enterTheFolder(data: any) {
    this.parentFileObj = data[0];
    this.currentFileObj = data[1];
    this.currentForm = data[1].type;
    this.isTopFolder = this.currentFileObj.chn == -1;
  }


  switchFolderType(event: any, form: number) {
    event.stopPropagation();
    if (this.currentForm != form) {
      this.currentForm = form;
      this.folderContent.switchFolderType(event, form);
    }
  }


  switchViewType(event: any) {
    event.stopPropagation();
    this.folderContent.switchViewType(event);
  }

  switchEditModel(event: any) {
    this.folderContent.switchEditModel(event);
  }


  /**
   * 点击回退回到上一层目录
   */
  backUpperFolder() {
    this.folderContent.fetchFolderList(this.currentForm, this.parentFileObj.id);
  }


  /**
   * 显示或者隐藏操作按钮
   */
  showOpBtn(array: Array<FileModel>) {
    this.isShowOpBtn = array.length ? true : false;
    this.selectedFileArray = array;
    this.differFileOrFolder()
  }


  /**
   * 区分选择的文件还是文件夹
   */
  differFileOrFolder() {
    this.selectedObj = {
      fileArray: [],
      folderArray: [],
      fileIdArray: [],
      folderIdArray: []
    };
    for (let i in this.selectedFileArray) {
      if (this.selectedFileArray[i].is_dir == 1) {
        this.selectedObj.folderArray.push(this.selectedFileArray[i]);
        this.selectedObj.folderIdArray.push(this.selectedFileArray[i].id);
      } else {
        this.selectedObj.fileArray.push(this.selectedFileArray[i]);
        this.selectedObj.fileIdArray.push(this.selectedFileArray[i].id);
      }
    }
  }


  /**
   * 删除文件
   */
  deleteTheFile(event: any) {
    event.stopPropagation();
    if (!this.selectedFileArray.length) return;
    let confirmDelete: Function = () => {
      this.folderModelService.deleteFolder({
        form: this.currentForm,
        did: this.selectedObj.folderIdArray,
        fid: this.selectedObj.fileIdArray,
      }, (res: any) => {
        if (res.status == 1) {
          this.folderContent.fetchFolderList(this.currentForm, this.currentFileObj.id);
          this.clearData();
        } else {
          this.showBasicAlert('Delete Failed', res.message);
        }
      });
    };
    let confirm = this.alertCtrl.create({
      title: 'Delete it',
      message: 'That is undone!',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            confirmDelete();
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * 给文件夹/文件打PIN
   */
  pinTheFile(event: any) {
    event.stopPropagation();
    if (!this.selectedFileArray.length) return;
    let count: number = 0;
    let way: string;
    for (let i in this.selectedObj.folderArray) {
      if (this.selectedObj.folderArray[i].is_starred == 1) {
        count++;
      }
    }
    if (count === this.selectedObj.folderArray.length) {
      way = 'del'
    } else {
      way = 'add'
    }
    this.folderModelService.folderStarred({
      form: this.currentForm,
      did: this.selectedObj.folderIdArray,
      way: way
    }, (res: any) => {
      if (res.status === 1) {
        this.folderContent.dealPinOperation(this.selectedObj.folderIdArray, way);
        this.clearData();
      } else {
        this.showBasicAlert('FAILED', 'Pin file failed')
      }
    })
  }

  /**
   * 清空数据对象
   */
  clearData() {
    this.selectedFileArray = [];
    this.selectedObj = {
      fileArray: [],
      folderArray: [],
      fileIdArray: [],
      folderIdArray: []
    };
    this.folderContent.clearData();
  }


  /**
   * basic 基础警告框
   */
  showBasicAlert(title: string, subTitle: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose channel',
      buttons: [
        {
          text: 'iCloud Driver',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'BI',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'More',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  /**
   * 上拉刷新
   */
  /**
   * 上拉刷新
   * @param event
   */
  doRefresh(event: any) {
    this.isRefresh = {
      isRefresh: true,
      refreshObj: event
    };
  }

}
