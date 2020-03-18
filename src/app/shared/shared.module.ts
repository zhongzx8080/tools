import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// 基础模块 start
const BASEMODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
]
// 基础模块 end

// 第三方模块 start
const THIRDMODULES = [
  // ant zorro
  NgZorroAntdModule
]
// 第三方模块 end

@NgModule({
  declarations: [],
  imports: [
    ...BASEMODULES,
    ...THIRDMODULES
  ],
  exports: [
    ...BASEMODULES,
    ...THIRDMODULES
  ]
})
export class SharedModule { }
