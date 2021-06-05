import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Property } from '../models/property';

@Injectable()
export class DataServiceService {
  public propertyListEmitter = new BehaviorSubject<Property[]>([]);
  public propertyList: any[] = [];
  constructor() {
    this.addProperty(
      JSON.stringify({
        id: new Date().getMilliseconds(),
        name: 'Propert1',
        description: 'good',
        size: '110'
      })
    );
  }

  addProperty(property) {
    console.log('service prop:' + property);

    this.propertyList.push(property);
    localStorage.setItem('properties', JSON.stringify(this.propertyList));
    this.propertyListEmitter.next([...this.propertyList]);
  }
  getProperty() {
    return this.propertyListEmitter.asObservable();
  }
  getPropertyBasedOnId(id) {
    for (let i = 0; i < this.propertyList.length; i++) {
      console.log('prope' + this.propertyList[i]);
      if (this.propertyList[i].id == id)
        return JSON.stringify(this.propertyList[i]);
    }
  }
}
