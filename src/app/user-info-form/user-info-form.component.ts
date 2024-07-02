import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.css'
})
export class UserInfoFormComponent implements OnInit{
    name: string = '';
    age: string = '';
    hairColor: string = '';

    constructor() {};

    ngOnInit(): void {}

    displayValues(): void {
      alert(`Name: ${this.name}, Age: ${this.age}, Hair Color: ${this.hairColor}`);
  }
}
