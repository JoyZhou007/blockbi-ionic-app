/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/30.
 */

import { Injectable } from "@angular/core";
@Injectable()
export class FileService {
  private sizeConfig: any = [20, 36, 80, 230, 300, 380];
  private defaultSize = 80;
  constructor() {

  }

  /**
   * 可用尺寸数组
   * @return {any}
   */
  getAvilableSize(){
    return this.sizeConfig;
  }

  /**
   * 重新获取图片地址
   * @param size
   * @param imgPath
   * @returns {string}
   */
  getImagePath(size: number, imgPath: string) {
    let imgSize = this.defaultSize;
    if (size > 0) {
      if (this.sizeConfig.indexOf(size) !== -1) {
        imgSize = size;
      }
    }
    let imgSizeStr = '_' + imgSize + '_' + imgSize;
    for (let perKey in this.sizeConfig) {
      let sizeStr = '_' + this.sizeConfig[perKey] + '_' + this.sizeConfig[perKey];
      if (imgPath && imgPath.indexOf(sizeStr) !== -1) {
        imgPath = imgPath.replace(sizeStr, imgSizeStr);
        break;
      }
    }
    return imgPath;
  }
}