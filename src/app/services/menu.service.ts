import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }


  getNavMenus () {
    let menus = [
      {
        text: 'Base 64',
        children: [
          {
            text: '图片转Base64',
            link: '/base64/image-to-base64'
          },
          {
            text: 'Base64编码',
            link: '/base64/encode'
          },
          {
            text: 'Base64解码',
            link: '/base64/decode'
          }
        ]
      },
      {
        text: '二维码',
        children: [
          {
            text: '生成二维码',
            link: '/'
          },
          {
            text: '二维码解码',
            link: '/'
          }
        ]
      },
      {
        text: 'JWT',
        children: [
          {
            text: 'JWT编码',
            link: '/'
          },
          {
            text: 'JWT解码'
          }
        ]
      },
      {
        text: 'JSON',
        children: [
          {
            text: '格式化'
          }
        ]
      },
      {
        text: '关于',
        link: '/about'
      }
    ]
    return menus;
  }

}
