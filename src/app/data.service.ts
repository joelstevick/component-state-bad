import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  getFirstName() {
    return of('Elmer');
  }

  getLastName() {
    return of('Fudd');
  }
}


