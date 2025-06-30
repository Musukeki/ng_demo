// import{使用的套件名稱} from
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RolesComponent } from './roles/roles.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet(暫時用不到),
    RolesComponent,
    NavComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  lev: number = 1;
  att: number = 10;
  def: number = 10;
  inputLev: number = 1;

  levUp() {
    this.lev++
    this.att += 3
    this.def += 2
  }

  levDown() {
    if(this.lev > 1) {
      this.lev--
      this.att -=3
      this.def -=2
    } else {
      alert('已是最低等級')
    }
  }

  reset() {
    this.lev = 1
    this.att = 10
    this.def = 10
  }

  editLev() {
    let editLev = Number(this.inputLev);

    if(typeof(editLev) == 'number' && editLev > 0) {

      console.log(this.inputLev)

      this.lev = this.inputLev
      this.att = (10 + this.inputLev * 3) -3
      this.def = (10 + this.inputLev * 2) -2

      this.inputLev = this.inputLev;
    } else {
      alert('等級不可小於1')
    }
  }

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

    // !!!!!!! TS 練習

    // ? TS for 迴圈練習
    // ? 1.
    // for(let i = 1; i <= 50; i++) {
    //   console.log(i)
    // }

    // ? 2.
    // for(let i = 1; i <= 50; i++) {
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

    // ! 5. 找陣列中最小值
    let arr = [4, 6, 1, 2, 7, 9, 12, 15, 13];

    // ? 1. 展開運算子 + Math.min
    // console.log(Math.min(...arr))

    // ? for 迴圈
    // let i = arr[0];
    // for(let data of arr) {
    //   if(data < i) {
    //     i = data;
    //   }
    // }

    // ? forEach
    // let min = arr[0];
    // arr.forEach(i => {
    //   if(i < min) {
    //     min = i;
    //   }
    // })
    // console.log(min)

    // ? 6.
    // let str = '你好我是Allen';
    // console.log(str.split('').reverse().join(""))

    // ? 7.
    // let str = '你好我是Allen';
    // let newArr = str.split('').slice(2).join('')
    // let newArr2 = str.split('').slice(0, 2).join('')
    // let finallArr = newArr.concat(',', newArr2)
    // console.log(finallArr)

    // ? 7.
    // let str:string = '你好，我是 Allen';
    // let getName = str.slice(str.indexOf('Allen'), str.indexOf('Allen') +5);
    // console.log(getName)

    // ? TS 練習宣告

    // ? 1.
    // let allenWallet = 200;
    // let burgerPrice = 50;
    // let frenchFricePrice = 40;
    // let restMoney = allenWallet - (burgerPrice + frenchFricePrice);
    // console.log(`Allen 剩下 ${restMoney} 元`)

    // ? 2.



    // ? 3.
    // let jsonData = [
    //   {
    //     userName: 'Allen',
    //     payMoney: 500
    //   },
    //   {
    //     userName: 'Ben',
    //     payMoney: 20
    //   },
    //   {
    //     userName: 'Eric',
    //     payMoney: 120
    //   }
    // ]
    // for loop
    // let vipUsers = [];
    // for(let data of jsonData) {
    //   if(data.payMoney > 200) {
    //     vipUsers.push(data.userName)
    //   }
    // }
    // console.log(vipUsers)

    // forEach
    // jsonData.forEach(i => {
    //   if (i.payMoney >= 200) {
    //     console.log(`${i.userName} 有符合 VIP 資格`)
    //   }
    // })

    // ? 4.

    // this.showBmi(85, 182) // showBmi 呼叫
  }


  // showBmi(weight: number, height: number) {
  //   let bmi: number = Number((weight / (height / 100) ** 2).toFixed(2));

  //   if (bmi < 18.5) {
  //     console.log(`BMI 為 ${bmi}，體重過輕`)
  //   }else if(bmi >= 18.5 && bmi < 24) {
  //     console.log(`BMI 為 ${bmi}，體重正常`)
  //   }else if(bmi >= 24 && bmi < 27) {
  //     console.log(`BMI 為 ${bmi}，體重過重`)
  //   }else if(bmi >= 27 && bmi < 30) {
  //     console.log(`BMI 為 ${bmi}，輕度肥胖`)
  //   }else if(bmi >= 30 && bmi < 35) {
  //     console.log(`BMI 為 ${bmi}，中度肥胖`)
  //   }else if(bmi >= 35) {
  //     console.log(`BMI 為 ${bmi}，重度肥胖`)
  //   }
  // }


}
