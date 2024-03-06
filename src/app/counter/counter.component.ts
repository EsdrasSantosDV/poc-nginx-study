import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {

  counter = signal(0);

  decrement() {
    this.counter.update(n => n - 1);
  }
  increment() {
    this.counter.update(n => n + 1);
  }
}
