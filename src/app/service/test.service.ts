import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  getUser() {
    return { id: 1, name: 'John Doe' };
  }
}
