import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TestService} from '../service/test.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-child-1',
  imports: [
    AsyncPipe
  ],
  templateUrl: './child-1.component.html',
  standalone: true,
  styleUrl: './child-1.component.scss'
})
export class Child1Component {
  @Input() userName: string = '';
  @Output() userClicked = new EventEmitter<void>();
  public testService = inject(TestService);


  onClick() {
    this.userClicked.emit();
    let i = 0;
    i++;
    this.testService.sendData(i)
  }

  constructor() {
    this.testService.data$.subscribe(value => {
      console.log('Received:', value);
    });
  }
}
