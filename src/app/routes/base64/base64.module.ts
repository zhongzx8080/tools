import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { Base64EncodeComponent } from "./base64-encode.component";
import { Base64DecodeComponent } from "./base64-decode.component";
import { ImageToBase64Component } from "./image-to-base64.component";

const COMPONENTS = [
  Base64EncodeComponent,
  Base64DecodeComponent,
  ImageToBase64Component
];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: '',
    component: ImageToBase64Component
  },
  {
    path: "image-to-base64",
    component: ImageToBase64Component
  },
  {
    path: "decode",
    component: Base64DecodeComponent
  },
  {
    path: "encode",
    component: Base64EncodeComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class Base64Module {}
