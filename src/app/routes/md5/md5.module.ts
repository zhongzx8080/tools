import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Md5DigestComponent } from "./md5-digest.component";
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [Md5DigestComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    component: Md5DigestComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class Md5Module {}
