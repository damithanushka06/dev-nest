import {Component, DestroyRef, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TestService} from './service/test.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dev-nest';
  items: { id: number; name: string }[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
  ];

  private userService = inject(TestService);

  user = signal(this.userService.getUser());
  destroyRef =  inject(DestroyRef)

  constructor() {

    const sub = interval(1000).subscribe(console.log);
    this.destroyRef.onDestroy(() => sub.unsubscribe());

  }

}
