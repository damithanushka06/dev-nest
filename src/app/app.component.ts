import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {Child1Component} from './child-1/child-1.component';
import {ReplaySubject, Subject} from 'rxjs';
import {PureExamplePipe} from './pure-example.pipe';
@Component({
  selector: 'app-root',
  imports: [Child1Component, PureExamplePipe],
  templateUrl: './app.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss'
})
export class AppComponent{

  public subject: Subject<number> = new Subject();
  numbers = [1, 2, 3];

  constructor() {

    this.subject = new ReplaySubject<number>(2, 10000);

  }

  clickMe(){
    Promise.resolve().then(() => {
      throw new Error('Broken');
    }).catch(err => {
      console.log({
        message: err.message,
        name: err.name,
        stack: err.stack
      });
    });

    //A,D,C,B

  }


}
