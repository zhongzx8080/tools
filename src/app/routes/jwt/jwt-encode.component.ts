import { Component, OnInit } from "@angular/core";
import { Base64Service } from 'src/app/services';



@Component({
  selector: "app-jwt-encode",
  templateUrl: "./jwt-encode.component.html"
})
export class JwtEncodeComponent implements OnInit {
  constructor(
    private base64Service: Base64Service
  ) {}

  ngOnInit(): void {}
}
