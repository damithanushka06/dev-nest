import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child1',
    loadComponent: () =>
      import('../app/child-1/child-1.component').then(m => m.Child1Component),
  },
  {
    path: 'child2',
    loadComponent: () =>
      import('../app/child-2/child-2.component').then(m => m.Child2Component),
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('../app/counter/counter.component').then(m => m.CounterComponent),
  },
];
