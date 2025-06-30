// 引用元件或套件...等，要告訴系統他們從哪來跟他們的名字
import { Component } from '@angular/core';

// @Component 這裡面寫的是 HTML 的設定
// 包含了他的標籤名稱(selector)、引用的套件(imports)、對應的HTML(templaterUrl)跟 SCSS(styleUrl)
@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

}
