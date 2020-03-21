import { Component, OnInit } from "@angular/core";
import { UploadFile, NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-image-to-base64",
  templateUrl: "./image-to-base64.component.html",
  styles: [
    `
    .clipArea {
      opacity: 0;
    }
    `
  ]
})
export class ImageToBase64Component implements OnInit {
  fileList: UploadFile[] = [];

  base64Image = "";

  data: any[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    this.loadData(1);
  }

  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = [file];
    let allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/bmp"
    ];
    const isJPG = allowedTypes.some(item => item === file.type);
    if (!isJPG) {
      this.msg.error("请选择图片类型文件");
      return false;
    }

    this.previewFile(file);

    return false;
  };

  previewFile(file) {
    let reader = new FileReader();
    let that = this;
    reader.addEventListener(
      "load",
      () => {
        that.base64Image = reader.result.toString();
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  loadData(pi: number): void {
    this.data = new Array(pi).fill({}).map((_, index) => {
      return {};
    });
  }
}
