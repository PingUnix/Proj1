import { Component,Directive } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>Hello <span [class.is-awesome] = "inputElement.value==='yes'" >helloo {{name}}</span></p>
    <label>input name</label>
    <input type="text" name = "name" #inputElement  (keyup)="0"/>
    <button [disabled] ="inputElement.value !== 'yes' "> only enabled if yes is entered </button>
        
    `,
    styleUrls:['./../test.css']

})
export class AppComponent  { 
  name = 'Angular';
  title = " angular 2 example" }
