import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() data: Property;
  constructor(private ds: DataServiceService) {}

  ngOnInit() {}

  onDelete(id: Number) {
    this.ds.deleteProperty(id);
  }
}
