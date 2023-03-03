import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    { name: 'Uddesh', age: 23, job: 'Engineer' },
    { name: 'James', age: 26, job: 'Designer' },
    { name: 'Joy', age: 32, job: 'Engineer' }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

}
