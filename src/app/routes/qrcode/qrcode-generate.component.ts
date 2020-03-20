import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as QRCode from "qrcode";

@Component({
  selector: "app-qrcode-generate",
  templateUrl: "./qrcode-generate.component.html",
  styles:[
    `
      .qrcode-card {
        margin-top: 10px;
      }
    `
  ]
})
export class QrcodeGenerateComponent implements OnInit {
  canvasId = "qrcodeCanvas";

  inputSubject = new Subject<String>();

  qrcodeText = "";
  imgUrl = '';

  constructor() {}

  ngOnInit(): void {
    this.inputSubject
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe(data => {
        this.generateQrcode(data);
      });
  }

  inputChange(event) {
    let value = event.target.value;
    this.inputSubject.next(value);
  }

  generateQrcode(data) {
    let opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      quality: 0.3,
      margin: 1,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }

    QRCode.toDataURL(data, opts, (err, url) => {
      if (err) {
        throw err
      }
      this.imgUrl = url;
    })
  }
}
