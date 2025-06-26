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
  // title = 'ng_demo';

  // 當設定了一個全域變數，就必須給該變數一個初始值，或在該變數後方加上一個!(可能有值或沒有值)讓系統跳過檢查。
  // textContent(全域變數名稱): string(變數型別) = "hello"(變數初始值)
  // textContent: string = "hello";
  // numberContent: number = 0;
  // numberContent!: number;

  showTitle: string = '我是標題';
  showContent: string = '我是內容';
  showImg: string = 'https://picsum.photos/100/100';
}
