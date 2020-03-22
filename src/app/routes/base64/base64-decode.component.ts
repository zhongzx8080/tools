import { Component, OnInit } from "@angular/core";
import { Base64Service } from "src/app/services";

@Component({
  selector: "app-base64-decode",
  templateUrl: "./base64-decode.component.html"
})
export class Base64DecodeComponent implements OnInit {
  rows = 15;

  originText = "";
  decodedText = "";

  constructor(private base64Service: Base64Service) {}

  ngOnInit(): void {}

  textChange(evt) {
    this.decodedText = this.base64Service.decode(this.originText);
  }

  clearText() {
    this.originText = "";
    this.decodedText = "";
  }
}
