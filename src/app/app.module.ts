import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declartion : [AppComponent],
providers : [],
imports : [BrowserModule],
bootstrap : [AppComponent]
})

export class AppModule{
  constructor(){
    console.log("app module is working");
  }
}
