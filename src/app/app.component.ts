import { Component,Directive } from '@angular/core';
import { OnInit} from '@angular/core';
//import { ngModel } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a href="" > a link </a>
    <input [(ngModel)]="name">
     <input [style.color]="colors" text="the title is"> 
    <h1 (click)="onSelect()" [class.clicked]="showDetail === true"> A title here</h1>
    <p>Hello {{name}} <span [class.is-awesome] = "inputElement.value==='yes'" >helloo {{name}}</span></p>
    <br/><br/>
    <div *ngIf="name === 'MAX'">
    <span [style.color]="colors">the title is {{title}}</span>
    <label>input name</label>
    </div>
    <p  [style.background-color]="'grey'">new paragraphy</p>
    <input type="text" name = "name" id="in1" #inputElement  (keyup)="0"/>
    <button [disabled]="inputElement.value !== 'yes'" > only enabled when input 'yes'</button>
    <test >this is the test component</test>
    <button (click)="fun()"> click me </button>
    <input type="text" name = "input" [value] = "name" /> {{name}}
    
    `,
    styleUrls:['./../test.css']

})
export class AppComponent implements OnInit { 
  private name = 'Angular'; 
  public showDetail = false;
  colors = 'red';
  title = "Quick start";
  index = false;
  fun(){
    if(this.index == false){
    this.name = " name ... ";
    this.title = this.name + " ... quick start";
    
    }
    else
      this.ngOnInit();
    this.index = !this.index;
  }
  ngOnInit():any{
    //return null;
    this.name = "MAX";
    this.title = this.name + "quick start";
  }
  onSelect(){
    this.showDetail = !this.showDetail;
  }
}
