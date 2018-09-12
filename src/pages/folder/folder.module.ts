/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import {NgModule} from "@angular/core";
import {FolderPage} from "./folder";
import {IonicPageModule} from "ionic-angular";
import {SharedModule} from "../../share/shared.module";
import {FolderContentComponent} from "./folder-content/folder-content";

@NgModule({
  declarations: [FolderPage,FolderContentComponent],
  imports: [IonicPageModule.forChild(FolderPage), SharedModule],
})
export class FolderPageModule {

}
