import { NgModule } from "@angular/core";
import { FormatJsonComponent } from "./format-json.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const COMPONENTS = [FormatJsonComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    component: FormatJsonComponent
  },
  {
    path: "format",
    component: FormatJsonComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class JsonModule {}
