import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats = [
    { value: 22, label: '# OF COMPONENTS'},
    { value: 990, label: 'REVENUE' },
    { value: 100, label: 'REVIEWS' }
  ];

  items = [
    { 
      image: '/assets/images/cauch.jpg',
      title: 'Couch',
      description: 'This is fantastic couch to seat'
    },
    {
      image: '/assets/images/Dresser.jpeg',
      title: 'Dresser',
      description: 'This is fantastic dresser'
    }
  ]

}
