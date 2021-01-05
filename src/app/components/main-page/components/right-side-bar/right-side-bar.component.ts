import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'right-sidebar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent {

    public screenHeight : number;
    constructor(public mainService: MainService) {
      this.screenHeight = mainService.$screenHeight;
     }
  
}
