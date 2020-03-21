import { Component, OnInit } from "@angular/core";
import { Base64 } from "js-base64";

@Component({
  selector: "app-base64-decode",
  templateUrl: "./base64-decode.component.html"
})
export class Base64DecodeComponent implements OnInit {
  rows = 15;

  originText = "";
  decodedText = "";

  constructor() {}

  ngOnInit(): void {}

  textChange(evt) {
    this.decodedText = this.base64Decode(this.originText);
  }

  clearText() {
    this.originText = "";
    this.decodedText = "";
  }

  private base64Decode(str) {
    let result = "";
    try {
      result = Base64.decode(str);
    } catch (error) {
      console.log("base64 decode error", error);
    }
    return result;
  }
}
