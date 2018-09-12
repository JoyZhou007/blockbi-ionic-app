import {Component, Inject, AfterViewChecked, Input} from '@angular/core';


/**
 * Generated class for the MissionProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bi-mission-progress',
  templateUrl: 'bi-mission-progress.html'
})
export class BiMissionProgressComponent implements AfterViewChecked{
  public d3: any;
  public hasInit: boolean = false;
  public eleId:string = 'progress-svg-el';
  public cpName: string;
  @Input('eleData') eleData: any;
  @Input('componentName') set componentName(data: string) {
    if (data) {
      this.cpName = data;
    }
  }
  get componentName() {
    return this.cpName;
  }
  constructor(
    @Inject('d3.service') public D3Service: any,
  ) {
    this.d3 = this.D3Service.getInstance();
  }


  ngAfterViewChecked(){
    if (typeof this.eleData !== 'undefined' && !this.hasInit) {
      if(this.eleData.data){
        this.eleData = this.eleData.data;
      }
      this.hasInit = true;
      this.drawCalendarProgress();
    }
  }
  /**
   *
   * @param ele
   */
  drawCalendarProgress() {
  /*    console.log('mission progress');*/
    let painter: any;
    if (this.cpName) {
      painter = this.d3.select(this.cpName).select('#' + this.eleId + '-' + this.eleData.mid);
    } else {
      painter = this.d3.select('#' + this.eleId + '-' + this.eleData.mid);
    }
    if (this.hasInit) {
      let g = painter.insert('svg').append('g').attr('class', 'progress-canvas');
      // 未完成条
      let text = '';
      if (this.eleData.todoProgressTime !== '') {
        text = this.eleData.todoProgressTime;
        g.append('rect').attr('width', this.eleData.fillLengthTodo + '%').attr('height', '12').attr('rx', 7)
          .attr('style', 'fill:' + this.eleData.fillColorTodo);
      }
      // 进行条
      if (this.eleData.doingProgressTime !== '') {
        text = this.eleData.doingProgressTime;
        g.append('rect').attr('width', this.eleData.fillLengthDoing + '%').attr('height', '12').attr('rx', 7)
          .attr('style', 'fill:' + this.eleData.fillColorDoing);
      }
      // 完成条
      if (this.eleData.doneProgressTime !== '') {
        text = this.eleData.doneProgressTime;
        g.append('rect').attr('width', this.eleData.fillLengthDone + '%').attr('height', '12').attr('rx', 7)
          .attr('style', 'fill:' + this.eleData.fillColorDone);
      }
      // 同时存在进行中和未完成条
      let textPos = 50;
      if (this.eleData.doingProgressTime !== '' && this.eleData.todoProgressTime !== '') {
        // textPos = parseInt(this.eleData.fillLengthDoing) / 2 - 5.5;
        textPos = parseInt(this.eleData.fillLengthDoing) / 2;
      }
      let textNode = g.append('text').attr('x', textPos + '%')
        .attr('y', '10').text(text).attr('style', 'font-size:12px;fill:#fff;');

      textNode.attr('transform', `translate(${-textNode.node().getBBox().width/2},0)`);
      // 如果是Application, 同意人时间节点条
      this.eleData.hasDrawed = true;
    }
  }
}
