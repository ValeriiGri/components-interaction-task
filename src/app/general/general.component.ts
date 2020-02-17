import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ICity} from './Icity';
import {Observable} from 'rxjs';
import {CityService} from '../city.service';

@Component({
  selector: 'task-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public constructor(
      private readonly cityService: CityService,
  ) {

  }


/*{img5Path: './assets/imgs/init1.jpg'},
{img6Path: './assets/imgs/init2.jpg'}*/

  public cities: Array<ICity> = this.cityService.cities;
  public imgFromBtn2: string = this.cities[0].imgPath2;
  public imgFromBtn: string = this.cities[0].imgPath1;

  @Output()
  public setGeneralControl: EventEmitter<object> = new EventEmitter<object>();


  public imgToHeadAndSocialComp(flag: number): void {
    switch (flag) {
      case 0:
        this.imgFromBtn = this.cities[flag].imgPath1;
        this.imgFromBtn2 = this.cities[flag].imgPath2;
        this.setGeneralControl.emit({imgFromBtn: this.imgFromBtn, imgFromBtn2: this.imgFromBtn2});
        break;
      case 1:
        this.imgFromBtn = this.cities[flag].imgPath1;
        this.imgFromBtn2 = this.cities[flag].imgPath2;
        this.setGeneralControl.emit({imgFromBtn: this.imgFromBtn, imgFromBtn2: this.imgFromBtn2});
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
