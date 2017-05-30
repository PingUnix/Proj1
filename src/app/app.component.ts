import { Component,Directive } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Hello <span [class.is-awesome] = "inputElement.value==='YES'" >helloo {{name}}</span></p>
    <label>input name</label>
    <input type="text" name = "name" #inputElement  (keyup)="0"/>
  
    `,
    styleUrls:['./../test.css']

})
export class AppComponent  { 
  name = 'Angular'; }
