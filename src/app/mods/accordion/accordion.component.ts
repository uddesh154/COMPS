import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() items:any = [];
  openItem = 0;

  onClick(index: number)
  {
    if(index === this.openItem)
    {
      this.openItem = -1;
    }else {
      this.openItem = index;
    }
  }
}
