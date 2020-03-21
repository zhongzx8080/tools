import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as QRCode from "qrcode";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-qrcode-generate",
  templateUrl: "./qrcode-generate.component.html",
  styles:[
    `
      .qrcode-card {
        margin-top: 10px;
      }

      .qrcode-img {
        min-width: 256px;
      }
    `
  ]
})
export class QrcodeGenerateComponent implements OnInit {
  canvasId = "qrcodeCanvas";

  inputSubject = new Subject<Object>();

  // 图片路径
  imgUrl = '';

  // 文件名
  fileName = "qrcode";

  validateForm: FormGroup;

  options = {
    errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      margin: 1,
      color: {
        dark: '',
        light: ''
      },
      text: '',
      size: 100
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inputSubject
      .subscribe(data => {
        this.generateQrcode();
      });

      this.validateForm = this.fb.group({
        foreground: [null, []],
        background: [null, []],
        size: [null, []]
      });
  }

  inputChange() {
    this.inputSubject.next();
  }

  generateQrcode() {

    let opts = {...this.options}
    let text = opts['text'] || ''
    if (!text) {
      return;
    }

    QRCode.toDataURL(text, opts, (err, url) => {
      if (err) {
        throw err
      }
      this.imgUrl = url;
    })
  }
}
