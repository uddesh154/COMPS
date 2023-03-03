import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  @Input('class') className = '';

  @Input() data: any = [];
  @Input() headers: any = [];

}
