import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ColorExtractorComponent } from "./color-extractor.component";

const COMPONENTS = [ColorExtractorComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    component: ColorExtractorComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class ColorExtractorModule {}
