import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
})
export class ExceptionComponent implements OnInit {


  exceptionInfo = {
    status: '404',
    title: '404',
    msg: 'Sorry, the page you visited does not exist.'
  }

  constructor(
   private activedRoute: ActivatedRoute,
   private globalService: GlobalService
  ) {

    let params = this.activedRoute.snapshot.queryParams;

    this.exceptionInfo = Object.assign(this.exceptionInfo, params);

   }

  ngOnInit(): void {
  }

  backHome() {
    this.globalService.backHome();
  }

}
