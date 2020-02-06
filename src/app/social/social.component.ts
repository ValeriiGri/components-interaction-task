import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'task-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {


  @Input()
  public imgForSocial: string;

  constructor() {

  }

  ngOnInit() {

  }

}
