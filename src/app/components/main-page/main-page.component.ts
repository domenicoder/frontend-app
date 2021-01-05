import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-login',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public screenHeight : number;
  constructor(public mainService: MainService) {
    this.screenHeight = mainService.$screenHeight;
   }
  
}
