import { Component,Directive } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Hello <span [class.is-awesome] = "inputElement.value==='yes'" >helloo {{name}}</span></p>
    <label>input name</label>
    <input type="text" name = "name" #inputElement  (keyup)="0"/>
  
    `,
    styleUrls:['./../test.css','./styles.css']

})
export class AppComponent  { 
  name = 'Angular'; }
