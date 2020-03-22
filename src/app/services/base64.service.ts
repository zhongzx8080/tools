import { Injectable } from '@angular/core';
import { Base64 } from "js-base64";

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }


  // 编码
  public encode(originStr: string) {
    let encodedStr = "";
    try {
      encodedStr = Base64.encode(originStr);
    } catch (error) {
      console.log('base64 encode error', error)
    }
    return encodedStr;
  }
  

  // 解码
  public decode(originStr: string) {
    let decodedStr = "";
    try {
      decodedStr = Base64.decode(originStr);
    } catch (error) {
      console.log('base64 decode error', error)
    }
    return decodedStr;
  }

}
