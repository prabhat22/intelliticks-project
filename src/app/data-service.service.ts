import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Property } from '../models/property';

@Injectable()
export class DataServiceService {
  public propertyListEmitter = new BehaviorSubject<Property[]>([]);
  public propertyList: Property[] = [];
  constructor() {
    this.addProperty({
      id: new Date().getMilliseconds(),
      name: 'Property1',
      description: 'good',
      size: '110'
    });
  }

  addProperty(property: Property) {
    // console.log('service prop:' + property);

    this.propertyList.push(property);
    localStorage.setItem('properties', JSON.stringify(this.propertyList));
    this.propertyListEmitter.next(this.propertyList);
  }
  updateProperty(property: Property) {
    let index = this.getPropertyIndex(property.id);
    this.propertyList[index].name = property.name;
    this.propertyList[index].description = property.description;
    this.propertyList[index].size = property.size;
  }
  deleteProperty(id: Number) {
    let index = this.getPropertyIndex(id);
    console.log(index);
    this.propertyList.splice(index, 1);
    console.log(JSON.stringify(this.propertyList));
    this.propertyListEmitter.next(this.propertyList);
  }
  getProperty() {
    return this.propertyListEmitter.asObservable();
  }
  getPropertyBasedOnId(id) {
    return this.propertyList[this.getPropertyIndex(id)];
  }
  getPropertyIndex(id) {
    for (let i = 0; i < this.propertyList.length; i++) {
      if (this.propertyList[i].id == id) return i;
    }
  }
}
