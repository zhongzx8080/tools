import { NgModule } from "@angular/core";
import { QrcodeGenerateComponent } from "./qrcode-generate.component";
import { QrcodeDecodeComponent } from "./qrcode-decode.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const COMPONENTS = [QrcodeGenerateComponent, QrcodeDecodeComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    component: QrcodeGenerateComponent
  },
  {
    path: "generate",
    component: QrcodeGenerateComponent
  },
  {
    path: "decode",
    component: QrcodeDecodeComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class QrcodeModule {}
