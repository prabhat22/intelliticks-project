import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable()
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  getDataFromApi() {
    const headers = { Authorization: 'Bearer key1NrtiI7KpYHcSd' };
    return this.http.get<Property[]>(
      'https://api.airtable.com/v0/appRWBWGzi9STh5s4/PropertyData?view=Grid%20view',
      { headers }
    );
  }
  addProperty(property: Property) {
    const headers = {
      Authorization: 'Bearer key1NrtiI7KpYHcSd',
      'Content-Type': 'application/json'
    };
    let tempArr = {
      records: [
        {
          fields: {
            name: property.name,
            description: property.description,
            size: property.size,
            id: property.id
          }
        }
      ]
    };
    return this.http.post<any>(
      'https://api.airtable.com/v0/appRWBWGzi9STh5s4/PropertyData',
      tempArr,
      { headers }
    );
  }
  deleteProperty(id: String) {
    const headers = {
      Authorization: 'Bearer key1NrtiI7KpYHcSd'
    };
    return this.http.delete<any>(
      'https://api.airtable.com/v0/appRWBWGzi9STh5s4/PropertyData/' + id,
      { headers }
    );
  }
  updateProperty(id, property) {
    const headers = {
      Authorization: 'Bearer key1NrtiI7KpYHcSd'
    };
    let tempObj = {
      fields: {
        name: property.name,
        description: property.description,
        size: property.size,
        id: property.id
      }
    };
    return this.http.put<any>(
      'https://api.airtable.com/v0/appRWBWGzi9STh5s4/PropertyData/' + id,
      tempObj,
      { headers }
    );
  }
}
