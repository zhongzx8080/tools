import { Component, OnInit } from "@angular/core";
import { GlobalService, Base64Service } from "src/app/services";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-md5-digest",
  templateUrl: "./md5-digest.component.html"
})
export class Md5DigestComponent implements OnInit {
  rows = 3;

  originText = "";
  digestedText = "";
  times = 1;

  validateForm: FormGroup;

  constructor(private globalService: GlobalService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      originText: ["", []],
      salt: ["", []]
    });
  }

  ngOnInit(): void {}

  clearText() {
    this.originText = "";
    this.digestedText = "";
    this.validateForm.reset();
    this.times = 1;
  }

  generateDigest() {
    let fd = this.validateForm.value;
    let salt = fd.salt || "";
    this.originText = fd.originText || "";
    let str = this.originText + salt;
    let times = this.times > 0 ? this.times : 1;
    this.digestedText = this.globalService.digest(str, times);
    console.log("result", this.digestedText);
  }

  submitForm(): void {
    this.generateDigest();
  }
}
