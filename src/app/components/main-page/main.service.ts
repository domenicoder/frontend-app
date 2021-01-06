import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class MainService {
    private screenHeight: number = window.innerHeight;
    changeFilter: EventEmitter<any> = new EventEmitter<any>();
    changeCategory: EventEmitter<any> = new EventEmitter<any>();
    
    public get $screenHeight(): number {
        return this.screenHeight;
    }

    public set $screenHeight(value: number) {
        this.screenHeight = value;
    }

}