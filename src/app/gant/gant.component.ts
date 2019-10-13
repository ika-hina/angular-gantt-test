import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css']
})
export class GantComponent implements OnInit {
  /*baseの横幅を知ろう*/
  base: Element;//gant-baseのパラメータ参照用インスタンス
  base_width: number;//gantt-baseの横幅
  gant_width: number;//gantt部分の横幅
  name_width: number;//名前エリアの横幅
  
  pixels_per_unit: number;


  constructor() { }

  ngOnInit() {
    //gantt-baseの横幅を取得しよう
    this.base = document.getElementById("gantt-base");
    this.base_width = this.base.clientWidth;
    this.name_width = this.base_width * 0.1;
    this.gant_width = this.base_width - this.name_width;
    //分あたりピクセルを計算
    this.pixels_per_unit = this.gant_width/(24*60);
  }

}
