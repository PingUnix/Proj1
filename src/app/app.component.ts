import { Component,Directive } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Hello <span [class.is-awesome] = "inputElement.value==='yes'" >helloo {{name}}</span></p>
    <br/><br/>
    <span [style.color]="'#CD5'">the title is {{title}}</span>
    <label>input name</label>

    <input type="text" name = "name" #inputElement  (keyup)="0"/>
    <button [disabled]="inputElement.value !== 'yes'" > only enabled when input 'yes'</button>
    `,
    styleUrls:['./../test.css']

})
export class AppComponent  { 
  name = 'Angular'; 
  title = " quick start";
}
