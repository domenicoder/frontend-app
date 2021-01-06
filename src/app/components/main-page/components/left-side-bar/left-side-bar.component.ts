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
      {name: 'Anime', visible:true, imageUrl:'../../../../../assets/icons/anime2.svg'},
      {name: 'Ciencia', visible:true, imageUrl:'../../../../../assets/icons/ciencia2.svg'},
      {name: 'Cine', visible:true, imageUrl:'../../../../../assets/icons/cine2.svg'},
      {name: 'Computacion', visible:true, imageUrl:'../../../../../assets/icons/anime2.svg'},
      {name: 'Deportes', visible:true, imageUrl:'../../../../../assets/icons/deportes2.svg'},
      {name: 'Economia', visible:true, imageUrl:'../../../../../assets/icons/economia2.svg'},
      {name: 'Filosofia', visible:true, imageUrl:'../../../../../assets/icons/filosofia2.svg'},
      {name: 'Juegos', visible:true, imageUrl:'../../../../../assets/icons/juegos2.svg'},
      {name: 'Gastronomía', visible:true, imageUrl:'../../../../../assets/icons/gastronomia2.svg'},
      {name: 'Literatura', visible:true, imageUrl:'../../../../../assets/icons/literatura2.svg'},
      {name: 'Memes', visible:true, imageUrl:'../../../../../assets/icons/memes2.svg'},
      {name: 'Musica', visible:true, imageUrl:'../../../../../assets/icons/musica2.svg'},
      {name: 'Paranormal', visible:true, imageUrl:'../../../../../assets/icons/paranormal2.svg'},
      {name: 'Politica', visible:true, imageUrl:'../../../../../assets/icons/politica2.svg'},
      {name: 'Programacion', visible:true, imageUrl:'../../../../../assets/icons/programacion2.svg'},
      {name: 'Social', visible:true, imageUrl:'../../../../../assets/icons/social2.svg'},
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
