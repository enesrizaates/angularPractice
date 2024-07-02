import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from '../example/example.component';
import { PeopleListComponent } from '../people-list/people-list.component';
import { MultipleChoiceComponent } from '../multiple-choice/multiple-choice.component';
import { EventHandlingComponent } from '../event-handling/event-handling.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CongratulationsMessageComponent } from '../congratulations-message/congratulations-message.component';

@Component({
  selector: 'app-counter-button-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ExampleComponent, PeopleListComponent, MultipleChoiceComponent, EventHandlingComponent, CounterButtonComponent, CongratulationsMessageComponent],
  templateUrl: './counter-button-page.component.html',
  styleUrl: './counter-button-page.component.css'
})
export class CounterButtonPageComponent {
  count: number = 0;
  threshold: number = 5;
  showCounterButton: boolean = true;

  constructor(private router: Router) { }
  incrementCount(): void {
    this.count += 1;
    if (this.count > this.threshold) {
      this.router.navigateByUrl('/event-handling');
    }
  }

  toogleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}
