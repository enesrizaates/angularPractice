import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css', './other-styles.css']
  // styles: ['button { background-color: black; color: white;}']
})
export class MultipleChoiceComponent {
  @Output() a = new EventEmitter<void>();
  @Output() b = new EventEmitter<void>();
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();
  aClicked(): void {
    this.a.emit();  // Emit an event when the button is clicked
  }

  bClicked(): void {
    this.b.emit();
  }

  cClicked(): void {
    this.c.emit();
  }

  dClicked(): void {
    this.d.emit();
  }
}
