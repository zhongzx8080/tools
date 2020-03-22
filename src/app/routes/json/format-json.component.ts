import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services';

@Component({
  selector: 'app-format-json',
  templateUrl: './format-json.component.html'
})
export class FormatJsonComponent implements OnInit {

  rows = 15;

  originText = "";
  formattedText = "";

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {}

  textChange(evt) {
    this.formattedText = this.globalService.formatJson(this.originText);
  }

  clearText() {
    this.originText = "";
    this.formattedText = "";
  }

}
