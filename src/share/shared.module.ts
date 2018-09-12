/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */

import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppConfig } from "./config/app.config";
import {
  ApiService,
  D3Service,
  DateService,
  TypeService,
  DialogService,
  FileService,
  ImService,
  StoreService,
  UserModelService,
  UserService,
  UserStoreService,
  ChatStoreService,
  NotificationService
} from "./service/index";
import { Dialogs } from "@ionic-native/dialogs";
import {
  BiFabBtnsComponent,
  BiLogoComponent,
  BiNoticeComponent,
  BiSearchComponent,
  BiSideMenuComponent,
  BiMissionProgressComponent,
  PublicSelectInterfaceComponent
} from "./component/index";
import { ForbiddenUsernameValidator,SlidesSkillDirective} from "./directive/index";
import { IonicModule } from "ionic-angular";
import { BiProfileComponent } from "./component/bi-profile/bi-profile";
import {MissionModelService} from "./service/model/mission-model.service";
import {NotificationStoreService} from "./service/storage/notification-store.service";




@NgModule({
  declarations: [
    BiFabBtnsComponent,
    BiLogoComponent,
    BiSearchComponent,
    BiNoticeComponent,
    BiSideMenuComponent,
    BiProfileComponent,
    BiMissionProgressComponent,
    ForbiddenUsernameValidator,
    SlidesSkillDirective,
    PublicSelectInterfaceComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    BiFabBtnsComponent,
    BiLogoComponent,
    BiSearchComponent,
    BiNoticeComponent,
    BiSideMenuComponent,
    BiProfileComponent,
    BiMissionProgressComponent,
    ForbiddenUsernameValidator,
    SlidesSkillDirective,
    PublicSelectInterfaceComponent
  ],
  providers: [
    Dialogs,
    UserModelService,
    MissionModelService
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {provide: 'app.config', useValue: AppConfig},
        {provide: 'store.service', useClass: StoreService},
        {provide: 'user-store.service', useClass: UserStoreService},
        {provide: 'chat-store.service', useClass: ChatStoreService},
        {provide: 'notification-store.service', useClass: NotificationStoreService},
        {provide: NotificationService, useClass: NotificationService},
        {provide: ApiService, useClass: ApiService},
        {provide: 'user.service', useClass: UserService},
        {provide: 'dialog.service', useClass: DialogService},
        {provide: 'im.service', useClass: ImService},
        {provide: 'type.service', useClass: TypeService},
        {provide: 'file.service', useClass: FileService},
        {provide: 'date.service', useClass: DateService},
        {provide: 'd3.service', useClass: D3Service},
      ]
    }
  }
}
