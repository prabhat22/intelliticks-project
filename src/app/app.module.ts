import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AppRoutingModule } from './routing/routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { DataServiceService } from './data-service.service';
import { NgxAirtableModule } from 'ngx-airtable';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';
declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxAirtableModule.forRoot({ apiKey: 'key1NrtiI7KpYHcSd' }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    PropertyListComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataServiceService, HttpServiceService]
})
export class AppModule {}
