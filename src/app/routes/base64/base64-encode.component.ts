import { Component, OnInit } from "@angular/core";
import { Base64 } from "js-base64";

@Component({
  selector: "app-base64-encode",
  templateUrl: "./base64-encode.component.html",
  styles: [
    `
      .clearBtn {
        margin-bottom: 10px;
      }
    `
  ]
})
export class Base64EncodeComponent implements OnInit {
  rows = 15;

  originText = "";
  encodedText = "";

  constructor() {}

  ngOnInit(): void {}

  textChange(evt) {
    this.encodedText = this.base64Encode(this.originText);
  }

  clearText() {
    this.originText = "";
    this.encodedText = "";
  }

  private base64Encode(str) {
    let encodedStr = Base64.encode(str) || "";
    return encodedStr;
  }
}
