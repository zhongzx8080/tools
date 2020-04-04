import { Component, OnInit } from "@angular/core";
import { UploadFile, NzMessageService } from "ng-zorro-antd";

@Component({
  selector: "app-color-extractor",
  templateUrl: "./color-extractor.component.html"
})
export class ColorExtractorComponent implements OnInit {
  fileList: UploadFile[] = [];

  base64Image = "";

  data: any[] = [];

  canvas;

  colorInfo = {
    hex: "",
    rgb: ""
  };

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
        let base64Str = reader.result.toString();
        that.base64Image = base64Str;
        that.drawCanvas(base64Str);
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

  drawCanvas(imageStr) {
    let canvasEle = document.getElementById("canvas");
    this.canvas = canvasEle;
    let ctx = this.getCanvasContext();
    let img = new Image();
    img.src = imageStr;
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      let offsetWidth = canvasEle.offsetWidth;
      let offsetHeight = canvasEle.offsetHeight;
      // 绘制前先清空画布
      ctx.clearRect(0, 0, offsetWidth, offsetHeight);
      ctx.drawImage(img, 0, 0, offsetWidth, (height * offsetWidth) / width);
    };
  }

  private getCanvasContext() {
    let ctx = this.canvas.getContext("2d");
    return ctx;
  }

  pick(event) {
    if (!this.canvas) {
      return;
    }

    let x = event.layerX;
    let y = event.layerY;
    let ctx = this.getCanvasContext();
    let pixel = ctx.getImageData(x, y, 1, 1);
    let data = pixel.data;

    this.colorInfo.hex = this.getColorString(data, 1);
    this.colorInfo.rgb = this.getColorString(data);
  }

  private getColorString(data: Array<Number>, type = 0) {
    // type == 1 16 进制; type == 0 rgba
    let result = "";
    if (data.length < 3) {
      return result;
    }

    if (type === 0) {
      // rgba
      data = data.slice(0, 3);
      result = data.join(",").replace(/^(.){1}(.*)(.){1}$/, "rgb($1$2$3)");
      return result;
    }

    // 16进制
    for (let i = 0; i < 3; i++) {
      let num = data[i];
      result += this.int2Hex(num);
    }

    return `#${result}`;
  }

  private int2Hex(i) {
    let radius = 16;
    let result = i.toString(radius);
    return result.length === 1 ? `0${result}` : result;
  }
}
