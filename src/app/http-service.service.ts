import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable()
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  getDataFromApi() {
    const headers = { Authorization: 'Bearer key1NrtiI7KpYHcSd' };
    return this.http
      .get<Property[]>(
        'https://api.airtable.com/v0/appRWBWGzi9STh5s4/PropertyData?view=Grid%20view',
        { headers }
      )
      .subscribe((data: Property[]) => {
        console.log(data);
      });
  }
}
