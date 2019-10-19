import { Component, OnInit } from '@angular/core';

/**クラス定義 */
export class User{
  id: number;
  name: string;
}

export class date{
  user: User;
  start: number;
  end: number;
}

export class schedule_drawing_style{
  start: string;
  width: string;
}

/**クラス定義 */
/**仮オブジェクト生成 */
export const users_array: User[] = [
  {id:1,name:"りんねこ"},
  {id:2,name:"るみねこ"}
] 

export const dates_array: date[] = [
  {user:users_array[0],start:1000,end:1500},
  {user:users_array[1],start:800,end:1300},
  {user:users_array[1],start:1400,end:1500}
]

export const schedule_array: schedule_drawing_style[][] = [
  [{start:'300px',width:'200px'},{start:'100px',width:'400px'}],
  [{start:'300px',width:'200px'},{start:'100px',width:'400px'}]
]
/**仮オブジェクト生成 */


@Component({
  selector: 'app-gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css']
})
export class GantComponent implements OnInit {
  /*gantt-baseの横幅を取得し、分あたりピクセルを計算*/
  base: Element;//gant-baseのパラメータ参照用インスタンス
  base_width: number;//gantt-baseの横幅
  gant_width: number;//gantt部分の横幅
  name_width: number;//名前エリアの横幅
  pixels_per_unit: number;

  /*dates配列をもとに表示用の形式に変換する */
  schedule_data = schedule_array;//表示用仮データを受け取っている


  constructor() { }

  ngOnInit() {
    /*gantt-baseの横幅を取得し、分あたりピクセルを計算*/
    this.base = document.getElementById("gantt-base");
    this.base_width = this.base.clientWidth;
    this.name_width = this.base_width * 0.1;
    this.gant_width = this.base_width - this.name_width;
    this.pixels_per_unit = this.gant_width/(24*60);
  }

}
