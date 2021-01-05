import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page.component';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BoardComponent } from './components/board/board.component'
import { MainService } from './main.service';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { MockedBoardDataService } from './components/board/mocked-board-data.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoadingComponent } from '../utils/loading/loading.component';

@NgModule({
  declarations: [
    MainPageComponent,
    NavBarComponent,
    LeftSideBarComponent,
    BoardComponent,
    RightSideBarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    CollapseModule
  ],
  providers: [MainService,MockedBoardDataService],
  bootstrap: [MainPageComponent]
})
export class MainModule { }
