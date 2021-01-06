import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'left-sidebar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent {
    public isCollapsed = false;
    public screenHeight : number;
    public filters = [
      {name:'Destacado',selected:true, icon:'exclude'},
      {name:'Subiendo',selected:false, icon:'graph-up'},
      {name:'Nuevo',selected:false, icon:'clock-fill'},

    ]
    public categories = [
      {name: 'Anime', visible:true},
      {name: 'Ciencia', visible:true},
      {name: 'Cine', visible:true},
      {name: 'Computacion', visible:true},
      {name: 'Deportes', visible:true},
      {name: 'Economia', visible:true},
      {name: 'Filosofia', visible:true},
      {name: 'Juegos', visible:true},
      {name: 'Gastronomía', visible:true},
      {name: 'Literatura', visible:true},
      {name: 'Memes', visible:true},
      {name: 'Musica', visible:true},
      {name: 'Paranormal', visible:true},
      {name: 'Politica', visible:true},
      {name: 'Programacion', visible:true},
      {name: 'Social', visible:true},
    ]
    constructor(public mainService: MainService) {
      this.screenHeight = mainService.$screenHeight;
     }

     changeFilter(filterName){
      this.filters.forEach(filter => {
        filter.name == filterName ? filter.selected = true : filter.selected = false;
      });
      this.mainService.changeFilter.emit();
     }
     changeCategory(category){
       this.mainService.changeCategory.emit(category);
     }
}
