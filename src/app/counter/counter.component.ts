import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  standalone: true,
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = signal(0); // signal holding a number
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }

}
