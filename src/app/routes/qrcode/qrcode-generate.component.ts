import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import * as QRCode from "qrcode";

@Component({
  selector: "app-qrcode-generate",
  templateUrl: "./qrcode-generate.component.html"
})
export class QrcodeGenerateComponent implements OnInit {
  canvasId = "qrcodeCanvas";

  inputSubject = new Subject<String>();

  qrcodeText = "";

  constructor() {}

  ngOnInit(): void {
    this.inputSubject
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe(data => {
        console.log('subject', data);
        this.generateQrcode(data);
      });
  }

  inputChange(event) {
    let value = event.target.value;
    this.inputSubject.next(value);
  }

  generateQrcode(data) {
    let canvasElement = document.getElementById(this.canvasId);
    let options = {
      width: 200
    }
    QRCode.toCanvas(canvasElement, data, options, function(error) {
      if (error) {
        console.error(error);
      }
      console.log("success!");
    });
  }
}
