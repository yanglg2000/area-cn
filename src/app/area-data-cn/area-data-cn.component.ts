import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AreaInfo, AreaItem, AreaItemFin } from './area-info'

@Component({
  selector: 'app-area-data-cn',
  templateUrl: './area-data-cn.component.html',
  styleUrls: ['./area-data-cn.component.css']
})
export class AreaDataCnComponent implements OnInit {
  private areaInfo: AreaInfo;
  private _code : string = "110101";
  private bInit: boolean = false;
  private bSet: boolean = false;
  public lists: AreaItemFin[][];
  public codes: string[];
  public araes: string[];

  @Output() codeChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() areaChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input() 
  public get code(): string{
    return this._code;
  }

  public set code(newCode: string){
    if (this._code != newCode){
      this._code = newCode;
      this.bSet = true;
      this.SelCode();
      this.bSet = false;
    }
  }

  constructor() { 
    this.areaInfo = new AreaInfo();
    this.lists = new Array<AreaItemFin[]>(3);
    this.codes = new Array<string>(3);
    this.araes = new Array<string>(3);
  }

  ngOnInit() {
    this.ChangeSel(-1);
    this.bInit = true;
    this.SelCode();
  }

  public SelCode(): void{
    if ( !this.bInit ) return;
    let cn = Number(this._code);
    if ( (cn < 110000) || (cn > 999999)){
      return;
    }

    if (cn % 1000 === 0){
      // 一级
      this.codes[0] = String(cn);
      this.ChangeSel(0);
    }
    else if ( cn % 100 === 0){
      // 二级
      this.codes[0] = String(cn-(cn%1000));
      this.ChangeSel(0);
      this.codes[1] = String(cn);
      this.ChangeSel(1);
    }
    else {
      // 三级
      this.codes[0] = String(cn-(cn%1000));
      this.ChangeSel(0);
      this.codes[1] = String(cn-(cn%100));
      this.ChangeSel(1);
      this.codes[2] = String(cn);
      this.ChangeSel(2);
    }
  }

  public ChangeSel(idx: number): void{
    let c = '';
    
    if (idx >= 2){
      let item = this.lists[2].find((v,i,a)=>v.n === this.codes[2]);
      if (item){
        this.araes[2] = item.d;
        if (this.bInit && (this._code != this.araes[2])){
          if (!this.bSet){
            this._code = this.araes[2];
            this.codeChange.emit(this.codes[2]);
          }
          this.areaChange.emit(this.araes);
        }
      }
      else{
        this.araes[2] = "";
      }
      return;
    }
    else if (idx < 0){
      c = '86';
    }
    else{
      c = this.codes[idx];
      let item = this.lists[idx].find((v,i,a)=>v.n === c);
      if (item){
        this.araes[idx] = item.d;
      }
      else if ( this.lists[idx].length > 0 ){
        this.araes[idx] = this.lists[idx][0].d;
      }
    }
    let a = this.areaInfo.data.find((v,i,a)=>v.n === c);
    if (a && a.v){
      this.codes[idx+1] = a.v[0].n;
      this.lists[idx+1] = a.v;
      this.ChangeSel(idx+1);
    }
  }
}
