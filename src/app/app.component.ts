import { Component } from '@angular/core';
import { common } from '@angular/common';

@Component({
  selector : 'app',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css']
})

export class AppComponent{
  constructor(){
    console.log("app component is rendering ");
  }
}