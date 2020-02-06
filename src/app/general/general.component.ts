import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'task-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  public img1 = '../../assets/imgs/ny.jpg';
  public img2 = '../../assets/imgs/sea.jpg';
  public img3 = '../../assets/imgs/wf.jpg';
  public img4 = '../../assets/imgs/hd.jpg';
  public img5 = '../../assets/imgs/init1.jpg';
  public img6 = '../../assets/imgs/init2.jpg';
  public imgFromBtn2: string;
  public imgFromBtn: string = this.img5;

  @Output()
  public setGeneralControl: EventEmitter<string> = new EventEmitter<string>();


  public imgToHead(flag: number): void {
    switch (flag) {
      case 0:
        this.imgFromBtn = this.img1;
        break;
      case 1:
        this.imgFromBtn = this.img3;
        break;
    }
  }

  public imgToSocialComp(flag: number):void {
    switch (flag) {
      case 0:
        this.imgFromBtn2 = this.img2;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
      case 1:
        this.imgFromBtn2 = this.img4;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
      case 2:
        this.imgFromBtn2 = this.img6;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
    }

  }



  ngOnInit() {
    this.imgToSocialComp(2);
  }

}
