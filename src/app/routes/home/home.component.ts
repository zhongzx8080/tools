import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  menus = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menus = this.menuService.getNavMenus();
  }

}
