import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() data: Property;
  constructor() {
    console.log('data', this.data);
  }

  ngOnInit() {}
}
