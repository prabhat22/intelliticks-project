import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Property } from '../../models/property';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy {
  public propertyList: Property[] = [];
  private subscription: Subscription;
  public data: Property = {
    name: 'Property 1 ',
    size: '220 sqft',
    description: 'Nice one'
  };
  constructor(private ds: DataServiceService) {}

  ngOnInit() {
    this.subscription = this.ds
      .getProperty()
      .subscribe((properties: Property[]) => {
        if (properties.length == 0) {
          for (let i = 0; i <= 6; i++) this.propertyList.push(this.data);
          console.log('properties::' + this.propertyList);
        } else {
          this.propertyList = properties;
        }
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
