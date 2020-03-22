import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

const COMPONENTS = [HomeComponent, AboutComponent];

const COMPONENTS_NOROUNT = [];

// 路由
const routes: Routes = [
  {
    path: "",
    redirectTo: "base64",
    pathMatch: "full"
  }, {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
  exports: [RouterModule]
})
export class HomeModule {}
