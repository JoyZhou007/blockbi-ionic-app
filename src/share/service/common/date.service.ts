/**
 * Created by christine
 * on 2017/10/24.
 */
import {Injectable} from "@angular/core";
const dateFormat = require('dateformat/lib/dateformat');

@Injectable()
export class DateService {

  public defaultFormat: string = 'HH:MM ddS mmm yyyy';
  public dateWord = {
    //月份
    month: ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'],

    monthSmall: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //周
    week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'],
    weekSmall: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.']
  };

  constructor() {
  }

  /**
   *日期的非UTC字符串
   * @param date 需要格式化的日期对象
   * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
   * @example  dateFormat(new Date())                               "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
   * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
   * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
   * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
   * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
   * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
   * @returns {string}
   */
  dateFormat(date: Date, sFormat?: string): string {
    if (!sFormat) {
      sFormat = 'yyyy-MM-dd HH:mm:ss';
    }
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      SMonth: '0',
      LMonth: '0',
      Day: 0,
      TDay: '0',
      SDay: '0',
      LDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.SMonth = this.dateWord.monthSmall[date.getMonth()];
    time.LMonth = this.dateWord.month[date.getMonth()];
    time.Day = date.getDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.SDay = this.dateWord.weekSmall[date.getDay()];
    time.LDay = this.dateWord.week[date.getDay()];
    time.Hour = date.getHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getMilliseconds();
    return sFormat
      .replace(/dddd/ig, time.LDay)
      .replace(/ddd/ig, time.SDay)
      .replace(/dd/ig, time.TDay)
      .replace(/MMMM/g, time.LMonth)
      .replace(/MMM/g, time.SMonth)
      .replace(/MM/g, time.TMonth)
      .replace(/yyyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/HH/ig, time.THour)
      .replace(/hh/ig, time.Thour)
      .replace(/mm/g, time.TMinute)
      .replace(/ss/ig, time.TSecond)
      .replace(/fff/ig, String(time.Millisecond))
  }

  /**
   * 当前时间的UTC时间字符串
   * @param date
   * @param sFormat
   * @returns {string}
   */
  getNowUTCString(sFormat?: string) {
    let date = new Date();
    if (!sFormat) {
      sFormat = 'yyyy-MM-dd HH:mm:ss';
    }
    let dateStr = this.formatUTC(date, sFormat);
    return dateStr;
  }

  /**
   * 将UTC时间转化为非UTC时间
   * @param date
   * @param formatString
   * @returns {string}
   */
  formatWithTimezone(date: any, formatString?: string): string {
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/');
      date = new Date(date);
    }
    if(!formatString){
      formatString = 'yyyy-MM-dd HH:mm:ss';
    }
    //本地时间和utc时间相差的毫秒数
    let offsetTime = new Date().getTimezoneOffset() * 60 * 1000;
    let localTime = date.getTime() - offsetTime;
    return this.dateFormat(new Date(localTime), formatString);
  }

  /**
   * 非utc时间转化为utc时间
   * @param date
   * @param formatString
   * @returns {string}
   */
  getUTCString(date: any, formatString?: string){
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/');
      date = new Date(date);
    }
    if(!formatString){
      formatString = 'yyyy-MM-dd HH:mm:ss';
    }
    //本地时间和utc时间相差的毫秒数
    let offsetTime = new Date().getTimezoneOffset() * 60 * 1000;
    let utcTime = date.getTime() + offsetTime;
    return this.dateFormat(new Date(utcTime), formatString);

  }

  /**
   * 得到UTC字符串
   * @param date
   * @param sFormat
   * @returns {string}
   */
  formatUTC(date: Date, sFormat: string): string {
    let time = {
      Year: 0,
      TYear: '0',
      Month: 0,
      TMonth: '0',
      SMonth: '0',
      LMonth: '0',
      Day: 0,
      TDay: '0',
      SDay: '0',
      LDay: '0',
      Hour: 0,
      THour: '0',
      hour: 0,
      Thour: '0',
      Minute: 0,
      TMinute: '0',
      Second: 0,
      TSecond: '0',
      Millisecond: 0
    };
    time.Year = date.getUTCFullYear();
    time.TYear = String(time.Year).substr(2);
    time.Month = date.getUTCMonth() + 1;
    time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
    time.SMonth = this.dateWord.monthSmall[date.getUTCMonth()];
    time.LMonth = this.dateWord.month[date.getUTCMonth()];
    time.Day = date.getUTCDate();
    time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
    time.SDay = this.dateWord.weekSmall[date.getUTCDay()];
    time.LDay = this.dateWord.week[date.getUTCDay()];
    time.Hour = date.getUTCHours();
    time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
    time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
    time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
    time.Minute = date.getUTCMinutes();
    time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
    time.Second = date.getUTCSeconds();
    time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
    time.Millisecond = date.getUTCMilliseconds();
    return sFormat
      .replace(/dddd/ig, time.LDay)
      .replace(/ddd/ig, time.SDay)
      .replace(/dd/ig, time.TDay)
      .replace(/MMMM/g, time.LMonth)
      .replace(/MMM/g, time.SMonth)
      .replace(/MM/g, time.TMonth)
      .replace(/yyyy/ig, String(time.Year))
      .replace(/yy/ig, time.TYear)
      .replace(/HH/ig, time.THour)
      .replace(/hh/ig, time.Thour)
      .replace(/mm/g, time.TMinute)
      .replace(/ss/ig, time.TSecond)
      .replace(/fff/ig, String(time.Millisecond))
  }

  /**
   * 将日期转为指定格式,非utc时间
   * @param date
   * @param formatString
   * @returns string
   */
  formatLocal(date: any, formatString?: string): string {
    let format = this.defaultFormat;

    if (typeof formatString !== 'undefined') {
      format = formatString;
    }
    if (typeof date === 'string') {
      date = date.replace(/-/g, '/');
    }
    return dateFormat(date, format, false);
  }

}