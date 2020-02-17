import {ICity} from './general/Icity';
import {Observable} from 'rxjs';

export class CityService {

  constructor() { }

  public cities: Array<ICity> = [ { imgPath1: './assets/imgs/ny.jpg', imgPath2: './assets/imgs/sea.jpg', title: 'New-York',
    iconPath1: './assets/imgs/ny_icon.jpg', iconPath2: './assets/imgs/sea_icon.jpg'},
    {imgPath1: './assets/imgs/wf.jpg', imgPath2: './assets/imgs/hd.jpg', title: 'Paris',
      iconPath1: './assets/imgs/wf_icon.jpg', iconPath2: './assets/imgs/hd_icon.jpg'},
  ];

  public getCities(): Array<ICity> {
    return this.cities;
  }


}
