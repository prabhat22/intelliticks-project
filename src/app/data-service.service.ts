import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../models/property';

@Injectable()
export class DataServiceService {
  public propertyListEmitter = new Subject<Property[]>();
  public propertyList: Property[] = [];
  constructor() {}

  getProperty() {
    return this.propertyListEmitter.asObservable();
  }
}
