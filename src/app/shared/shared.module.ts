import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// 基础模块 start
const BASEMODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
];
// 基础模块 end

// Zorro Module start
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzListModule } from "ng-zorro-antd/list";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzUploadModule } from "ng-zorro-antd/upload";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzResultModule } from "ng-zorro-antd/result";
import { NzMenuModule } from "ng-zorro-antd/menu";

const ZorroModules = [
  NzMenuModule,
  NzResultModule,
  NzLayoutModule,
  NzTypographyModule,
  NzIconModule,
  NzButtonModule,
  NzMessageModule,
  NzListModule,
  NzFormModule,
  NzInputModule,
  NzDescriptionsModule,
  NzTagModule,
  NzUploadModule,
  NzInputNumberModule,
  NzCardModule,
  NzAlertModule,
];
// Zoroo Module  end

// 第三方模块 start
const THIRDMODULES = [
  // ant zorro
  ZorroModules,
];
// 第三方模块 end

@NgModule({
  declarations: [],
  imports: [...BASEMODULES, ...THIRDMODULES],
  exports: [...BASEMODULES, ...THIRDMODULES],
})
export class SharedModule {}
