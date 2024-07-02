import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {
  message = "I am a component!";
  
  doSomething(message: string): void {
    alert('The button says: ' + message);
  }

  doSomethingElse(): void {
    alert('Goodbye!');
  }
}
