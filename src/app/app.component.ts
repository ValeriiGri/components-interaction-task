import { Component } from '@angular/core';

@Component({
  selector: 'task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-interaction-task';
  public imgSocial: string;
  public setImg(imgs){
    this.imgSocial = imgs.imgFromBtn2;
  }
}
