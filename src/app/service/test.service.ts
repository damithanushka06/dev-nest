import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private dataSubject = new Subject<number>();
  public readonly data$ = this.dataSubject.asObservable();

  public userSubject = new BehaviorSubject(null);


  constructor() { }

  sendData(data: number) {
    this.dataSubject.next(data);
  }

  setUser(user:any) {
    this.userSubject.next(user); // only the service can change the value
  }

}
