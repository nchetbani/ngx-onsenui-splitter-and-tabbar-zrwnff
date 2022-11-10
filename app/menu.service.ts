import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {
  subject = new Subject();
  get menu$() {
    return this.subject.asObservable();
  }
  toggle() {
    this.subject.next();
  }
}