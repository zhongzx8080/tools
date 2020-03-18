import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-qrcode-generate',
  templateUrl: './qrcode-generate.component.html',
})
export class QrcodeGenerateComponent implements OnInit {


  
  canvasId = "qrcodeCanvas";

  inputSubject = new Subject<String>();

  qrcodeText = "";

  constructor() { }

  ngOnInit(): void {

    this.inputSubject.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(res => {
      // console.log('subject', res);
    })
  }

  inputChange(event) {
    let value = event.target.value;
    this.inputSubject.next(value);
  }

}
