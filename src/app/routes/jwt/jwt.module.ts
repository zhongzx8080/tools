import { NgModule } from "@angular/core";
import { JwtDecodeComponent } from "./jwt-decode.component";
import { JwtEncodeComponent } from "./jwt-encode.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const COMPONENTS = [JwtEncodeComponent, JwtDecodeComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    component: JwtEncodeComponent
  },
  {
    path: "encode",
    component: JwtEncodeComponent
  },
  {
    path: "decode",
    component: JwtDecodeComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class JwtModule {}
