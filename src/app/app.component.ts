// import{使用的套件名稱} from
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // ! ts 變數練習
  // ?宣告全域變數
  // 當設定了一個全域變數，就必須給該變數一個初始值，或在該變數後方加上一個!(可能有值或沒有值)讓系統跳過檢查。
  // textContent(全域變數名稱): string(變數型別) = "hello"(變數初始值)
  // textContent: string = "hello";
  // numberContent: number = 0;
  // numberContent!: number;

  // showTitle: string = '我是標題';
  // showContent: string = '我是內容';
  // showImg: string = 'https://picsum.photos/100/100';

  // ? 宣告函式(方法)
  // 要抓到全域變數的內容，要在前面打"this.變數名稱"就可抓到全域變數
  // global: string = "全域變數";
  // showConsole() {
  //   let area = '區域變數';
  //   console.log(this.global, area);
  // }

  // 以下這段會報錯，因為在全域找不到 area 這個變數
  // message = console.log(this.global, area);

  // alertContent(str: string) {
  //   console.log(str);
  // }
  // ngOnDestroy() {
  // alert('我要被關掉了，再見！');
  // }

  // arrayData: Array<any> = ['a', 2, 'b'];

  ngOnInit(): void {
    // console.log('開啟時執行')

    // let numData: number = 1;
    // let strData: string = '2';

    // ! 型別轉換
    // ?文字轉數字
    // parseInt() --> 會將傳入的值轉換成數字型別
    //console.log(numData * parseInt(strData))

    // ? 數字轉文字
    // console.log(numData, strData);
    // String()可將傳入的值轉換為文字型別
    // console.log(String(numData))
    // 數字型別 + ''(空字串)時，數字會轉換為文字
    // console.log(numData+'')

    // ? JSON 轉文字
    // JSON 的資料格式沒有自定義的話就用 any(可以用 interface 自定義)
    // let jsonData: any = {
    //   name: 'Eric',
    //   level: 12
    // }
    // console.log(jsonData);
    // console.log(JSON.stringify(jsonData))

    // ? 文字轉 JSON
    // let strData: string = '{"name":"Eric","level":12}';
    // console.log(JSON.parse(strData));

    // 以上幾種型別轉換的方法，強烈建議一定要先確認你要轉換資料的內容格式

    // ? 時間
    // let date = new Date();
    // let year = date.getFullYear(),
    //     month = date.getMonth() + 1,
    //     day = date.getDate()

    //     console.log(`今天是${year}年${month}月${day}日`)
    // console.log(date.getFullYear(), date.getMonth(), date.getDate())

    // ? 字串方法
    // 從左到右且從0開始算，-1 表示該字串內沒有對應的內容
    let strData = 'hello';
    // console.log( strData.indexOf('e'), strData.indexOf('K') )

    // ?　字串轉陣列
    // const newArray = strData.split('')
    // console.log(newArray)

    // ? 陣列方法 filter
    // const arr = [10, 12, 25, 13, 24];

    // let newArr = arr.filter(item => {
    //   return item % 5 == 0;
    // })

    // const pushArr = newArr.push(9999);

    // console.log(newArr, pushArr)

    // ? for loop
    // let forItem = 0;
    // for(let i = 0; i < newArr.length; i++) {
    //   if(newArr[i] == 25) {
    //     forItem = i;
    //   }
    // }
    // console.log(newArr, forItem);

    // ? for loop TS
    // for(let tsArr of newArr) {
    //   console.log(tsArr)
    // }


    // ? TS for 迴圈練習
    // ? 1.
    // for(let i = 0; i <= 50; i++) {
    //   console.log(i)
    // }

    // ? 2.
    // for(let i = 0; i <= 50; i++) {
    //   if(i % 2 != 0) {
    //     console.log(i)
    //   }
    // }

    // ? 3.
    // for(let i = 0; i <= 50; i++) {
    //   if(i % 3 == 2) {
    //     console.log(i)
    //   }
    // }

    // ? 4.
    // let data = [
    //   {
    //     name: '小明',
    //     age: 10
    //   },
    //   {
    //     name: '小陳',
    //     age: 24
    //   },
    //   {
    //     name: '小王',
    //     age: 16
    //   }
    // ]
    // data.forEach((i) => {
    //   if(i.name == "小王") {
    //     i.age = 18;
    //   }
    // })
    // console.log(data)

    // ? 5.
    // let arr = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    // console.log(Math.min(...arr))

    // ? 6.
    let str = '你好我是Allen';
    console.log(str.split('').reverse().join(""))

    // ? 7.
    let finalStr = str.split('')
  }
}






