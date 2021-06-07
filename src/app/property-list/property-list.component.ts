import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Property } from '../../models/property';
import { DataServiceService } from '../data-service.service';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnChanges, OnDestroy {
  public propertyList: Property[] = [];
  private subscription: Subscription;
  constructor(private ds: DataServiceService, private hs: HttpServiceService) {}
  ngOnChanges() {}

  ngOnInit() {
    this.subscription = this.ds
      .getProperty()
      .subscribe((properties: Property[]) => {
        console.log('properties', properties);
        if (properties.length > 0) {
          this.propertyList = [];
          for (let i = 0; i < properties.length; i++) {
            this.propertyList.push(properties[i]);
          }
        } else {
          this.propertyList = [];
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
