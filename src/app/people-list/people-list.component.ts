import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  showList: boolean = true;
  people = [{
    name: 'John',
    age: 34,
    hairColor: 'brown',
  },
  {
    name: 'Jane',
    age: 56,
    hairColor: 'blonde',
  },
  {
    name: 'Bob',
    age: 41,
    hairColor: 'red',
  },
]

}
