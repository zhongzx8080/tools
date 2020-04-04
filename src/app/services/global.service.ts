import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";

import * as md5 from "js-md5";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  constructor(private msgService: NzMessageService, private router: Router) {}

  // 消息提示
  msg(content, type = "info") {
    let typeArr = ["success", "error", "warning", "info"];
    type = typeArr.indexOf(type) > -1 ? type : "info";
    return this.msgService.create(type, content);
  }

  backHome() {
    return this.router.navigateByUrl("/");
  }

  // json 格式化
  formatJson(jsonStr: string) {
    let jsonObj;
    try {
      jsonObj = JSON.parse(jsonStr);
    } catch (error) {
      console.log("json 格式化异常", error);
      this.msg("无效的JSON", "error");
      return "";
    }
    let formattedJson = JSON.stringify(jsonObj, null, "\t");
    return formattedJson;
  }

  // md5摘要
  digest(originText = "", times = 1) {
    let digestedStr = originText;
    try {
      if (times > 0) {
        for (let i = 0; i < times; i++) {
          digestedStr = md5(digestedStr);
        }
      }
    } catch (error) {
      digestedStr = '';
      console.log("md5 error", error);
    }
    return digestedStr;
  }
}
