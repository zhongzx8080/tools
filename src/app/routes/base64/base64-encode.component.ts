import { Component, OnInit } from "@angular/core";
import { Base64Service } from "src/app/services";

@Component({
  selector: "app-base64-encode",
  templateUrl: "./base64-encode.component.html"
})
export class Base64EncodeComponent implements OnInit {
  rows = 15;

  originText = "";
  encodedText = "";

  constructor(private base64Service: Base64Service) {}

  ngOnInit(): void {}

  textChange(evt) {
    this.encodedText = this.base64Service.encode(this.originText);
  }

  clearText() {
    this.originText = "";
    this.encodedText = "";
  }
}
