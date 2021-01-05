import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MainService } from './components/main-page/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public screenHeight : number;
  constructor(public mainService: MainService) {
    this.screenHeight = mainService.$screenHeight
   }

}
