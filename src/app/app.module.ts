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

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PropertyCardComponent,
    AddPropertyComponent,
    PropertyListComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataServiceService]
})
export class AppModule {}
