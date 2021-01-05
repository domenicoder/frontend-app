import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  private isUserLogged : boolean = false;
  public get $isUserLogged(): boolean {
    return this.isUserLogged;
  }

  public set $isUserLogged(value: boolean) {
    this.isUserLogged = value;
  }

  
}
