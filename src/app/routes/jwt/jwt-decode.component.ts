import { Component, OnInit } from "@angular/core";
import { GlobalService, Base64Service } from "src/app/services";

@Component({
  selector: "app-jwt-decode",
  templateUrl: "./jwt-decode.component.html"
})
export class JwtDecodeComponent implements OnInit {
  rows = 15;

  originText = "";
  decodedText = "";

  constructor(
    private globalService: GlobalService,
    private base64Service: Base64Service
  ) {}

  ngOnInit(): void {}

  textChange(evt) {
    this.decodedText = this.decodeToken(this.originText);
  }

  clearText() {
    this.originText = "";
    this.decodedText = "";
  }

  private decodeToken(token) {
    let result = "";
    if (!token) {
      return result;
    }
    let parts = (token || "").split(".");

    if (parts.length !== 3) {
      this.globalService.msg("JWT 格式错误");
      return result;
    }
    let payload = parts[1];
    result = this.base64Service.decode(payload);
    if (result) {
      result = this.globalService.formatJson(result);
    }
    return result;
  }
}
