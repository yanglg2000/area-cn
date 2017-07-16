import { Component } from '@angular/core';
import { AreaDataCnComponent } from './area-data-cn/area-data-cn.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public code = "130204";
  public areas: string[];
  title = '你当前选择的是:';

  public OnAreaChg(ar: string[]){
    this.areas = ar;
  }
}
