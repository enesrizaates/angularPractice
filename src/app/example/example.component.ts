import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
@Input() name: string = "";
@Input() age: number = 0;
@Input() hairColor: string = "";
// noNameBlock: boolean = true;
}
