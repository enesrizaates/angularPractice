import { Component,OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent implements  OnInit, OnDestroy{
  @Input() count: number = 0;

  @Output() buttonClicked = new EventEmitter<void>();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onClick(): void {
    this.buttonClicked.emit();
  }

}
