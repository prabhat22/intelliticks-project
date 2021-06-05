import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Property } from '../../models/property';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnChanges, OnDestroy {
  public propertyList: any[] = [];
  private subscription: Subscription;
  constructor(private ds: DataServiceService) {}
  ngOnChanges() {}

  ngOnInit() {
    console.log('list oninti');
    this.subscription = this.ds.getProperty().subscribe((properties: any[]) => {
      console.log('properties');
      for (let i = 0; i < properties.length; i++) {
        console.log(JSON.parse(properties[i]));
        this.propertyList.push(JSON.parse(properties[i]));
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
