import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { MockedBoardDataService } from './mocked-board-data.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    public loading = true;
    public screenHeight : number;
    public data;
    public subscriptions = [];
    constructor(public mainService: MainService, mockedBoardDataService: MockedBoardDataService) {
      this.screenHeight = mainService.$screenHeight;
      this.data = mockedBoardDataService.$mockedData;
     }

     ngOnInit(){
      this.loadBoard();
      this.subscriptions.push(this.mainService.changeFilter.subscribe( () => {
        this.loadBoard();
      }),
      this.mainService.changeCategory.subscribe( (category) => {
        this.loadBoard();
      })
      )
     }

     loadBoard(){
       this.loading = true;
       setTimeout( () => {
          this.loading = false;
       }, 1500)
     }

     ngOnDestroy(){
       this.subscriptions.forEach( (subscription) => {
         subscription.unsubscribe();
       })
     }
  
}
