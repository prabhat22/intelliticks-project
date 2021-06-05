import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router) {
    console.log('const call');
  }
  ngOnInit() {
    console.log('oninit call');
  }
  goTo() {
    this.route.navigate(['add-property']);
  }
}
