import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Property } from '../models/property';
import { HttpServiceService } from './http-service.service';

@Injectable()
export class DataServiceService {
  public propertyListEmitter = new BehaviorSubject<Property[]>([]);
  public propertyList: any[] = [];
  constructor(private hs: HttpServiceService) {
    // this.addProperty({
    //   id: new Date().getMilliseconds(),
    //   name: 'Property1',
    //   description: 'good',
    //   size: '110'
    // });
  }

  addProperty(property: Property) {
    return this.hs.addProperty(property);
  }
  updateProperty(id: String, property: Property) {
    return this.hs.updateProperty(id, property);
  }
  deleteProperty(id: string) {
    this.hs.deleteProperty(id).subscribe(data => {
      if (data.deleted) {
        let index = this.getPropertyIndex(id);
        console.log(index);
        this.propertyList.splice(index, 1);
        console.log(JSON.stringify(this.propertyList));
        this.propertyListEmitter.next(this.propertyList);
      }
    });
  }
  getProperty() {
    this.hs.getDataFromApi().subscribe((properties: any) => {
      this.propertyList = [];
      for (let i = 0; i < properties.records.length; i++) {
        this.propertyList.push(properties.records[i]);
      }
      this.propertyListEmitter.next(this.propertyList);
    });

    return this.propertyListEmitter.asObservable();
  }
  getPropertyBasedOnId(id) {
    let index = this.getPropertyIndex(id);
    return this.propertyList[index];
  }
  getPropertyIndex(id) {
    for (let i = 0; i < this.propertyList.length; i++) {
      if (this.propertyList[i].id == id) return i;
    }
  }
}
