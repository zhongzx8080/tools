import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ExceptionComponent } from "./home/exception.component";
import { environment } from "src/environments/environment";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "base64",
        pathMatch: "full"
      },
      {
        path: "base64",
        loadChildren: () =>
          import("./base64/base64.module").then(m => m.Base64Module)
      },
      {
        path: "qrcode",
        loadChildren: () =>
          import("./qrcode/qrcode.module").then(m => m.QrcodeModule)
      },
      {
        path: "jwt",
        loadChildren: () => import("./jwt/jwt.module").then(m => m.JwtModule)
      },
      {
        path: "json",
        loadChildren: () => import("./json/json.module").then(m => m.JsonModule)
      }
    ]
  },
  {
    path: "**",
    component: ExceptionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash
    })
  ]
})
export class RoutesRoutingModule {}
