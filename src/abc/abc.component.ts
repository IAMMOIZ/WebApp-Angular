import {Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
@Component({
  selector : 'abc',
  templateUrl : './abc.component.html',
  styleUrls : ['./abc.component.css']
})
export class AbcComponent{
  constructor(){
    console.log('abc.component.ts');
  }
}