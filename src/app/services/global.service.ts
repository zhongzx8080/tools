import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(
    private msgService: NzMessageService
  ) {
   }

   // 消息提示
   msg(content, type = 'info') {
     let typeArr = ['success', 'error', 'warning', 'info'];
     type = typeArr.indexOf(type) > -1 ? type : 'info';
     return this.msgService.create(type, content);
   }

}
