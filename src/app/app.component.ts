import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router, private hs: HttpServiceService) {
    //  this.hs.getDataFromApi();// this service is getting implemented right now
  }
  ngOnInit() {}
  goTo() {
    this.route.navigate(['add-property']);
  }
}
