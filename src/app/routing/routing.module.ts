import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from '../add-property/add-property.component';
import { PropertyListComponent } from '../property-list/property-list.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: 'edit-property/:id',
    component: AddPropertyComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
