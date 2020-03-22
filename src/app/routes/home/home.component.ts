import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  menus = [];

  githubUrl = environment.github;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menus = this.menuService.getNavMenus();
  }

}
