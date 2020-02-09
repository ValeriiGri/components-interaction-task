import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ICity} from './Icity';

@Component({
  selector: 'task-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() {

  }


  public cities: Array<ICity> = [ { imgPath1: './assets/imgs/ny.jpg', imgPath2: './assets/imgs/sea.jpg', title: 'New-York',
                                iconPath1: './assets/imgs/ny_icon.jpg', iconPath2: './assets/imgs/sea_icon.jpg'},
                              {imgPath1: './assets/imgs/wf.jpg', imgPath2: './assets/imgs/hd.jpg', title: 'Paris',
                                iconPath1: './assets/imgs/wf_icon.jpg', iconPath2: './assets/imgs/hd_icon.jpg'},
                            ];
/*{img5Path: './assets/imgs/init1.jpg'},
{img6Path: './assets/imgs/init2.jpg'}*/


  public imgFromBtn2: string;
  public imgFromBtn: string = this.cities[0].imgPath1;

  @Output()
  public setGeneralControl: EventEmitter<string> = new EventEmitter<string>();


  public imgToHeadAndSocialComp(flag: number): void {
    switch (flag) {
      case 0:
        this.imgFromBtn = this.cities[flag].imgPath1;
        this.imgFromBtn2 = this.cities[flag].imgPath2;
        //this.setGeneralControl.emit(this.imgFromBtn2);
        break;
      case 1:
        this.imgFromBtn = this.cities[flag].imgPath1;
        this.imgFromBtn2 = this.cities[flag].imgPath2;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
    }
  }

  /*public imgToSocialComp(flag: number):void {
    switch (flag) {
      case 0:
        this.imgFromBtn2 = this.cities[4].img5Path;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
      case 1:
        this.imgFromBtn2 = this.cities[3].img4Path;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
      case 2:
        this.imgFromBtn2 = this.cities[5].img6Path;
        this.setGeneralControl.emit(this.imgFromBtn2);
        break;
    }

  }*/



  ngOnInit() {
    this.imgToHeadAndSocialComp(0);
  }

}
