import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AbcComponent} from './abc.component';
@NgModule({
  bootstrap : [AbcComponent],
  declarations : [AbcComponent],
  imports : [BrowserModule,HttpClientModule],
  // exports : [],
  // provoiders : []
})

export class AbcModule{
  constructor(){
    console.log("AbcModule");
  }
}