import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
 showModal = false;

 item = [
  {title:'Why sky is blue?' , content:'Sky is blue because it`s blue'},
  {title:'What is the test of Mango?',content:'Mangose are sweet in test'},
  {title:'What is the color of tree?' , content:'Trees are green in color'}
 ];

 onClick()
 {
  this.showModal = !this.showModal;
 }
}
