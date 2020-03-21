import { Component, OnInit } from "@angular/core";
import { Decoder } from "@nuintun/qrcode";
import { UploadFile, NzMessageService } from "ng-zorro-antd";

const qrcode = new Decoder();

@Component({
  selector: "app-qrcode-decode",
  templateUrl: "./qrcode-decode.component.html"
})
export class QrcodeDecodeComponent implements OnInit {
  fileList: UploadFile[] = [];

  base64Image = "";

  data: any[] = [];

  qrcodeText = "";

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

    // 置空解码结果
    this.qrcodeText = "";

    this.previewFile(file);

    return false;
  };

  previewFile(file) {
    let reader = new FileReader();
    let that = this;
    reader.addEventListener(
      "load",
      () => {
        let base64Str = reader.result.toString();
        that.base64Image = base64Str;
        that.decodeQrcode(base64Str);
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
  decodeQrcode(base64Str) {
    let that = this;
    qrcode
      .scan(base64Str)
      .then(result => {
        that.qrcodeText = result.data;
      })
      .catch(error => {
        that.msg.error("解码失败,请检查上传图片是否为二维码图片");
      });
  }
}
