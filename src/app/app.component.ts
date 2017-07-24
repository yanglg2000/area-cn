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
  public inputCode: string= "";
  public title = '你当前选择的是:';

  public OnAreaChg(ar: string[]){
    this.areas = ar;
  }

  public onKeyUp(){
    //console.log("onKeyUp Enter value=" + this.inputCode);
    if (this.inputCode.length < 6)
      return;
    //console.log("input is " + this.inputCode);
    let v = this.inputCode.substr(0,6);
    if (Number(v) >= 100000 ){
      this.code = v;
    }
  }
}
