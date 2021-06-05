import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addPropertyForm: FormGroup;
  constructor() {
    this.initializePropertyForm();
  }

  ngOnInit() {}

  initializePropertyForm() {
    this.addPropertyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    if (this.addPropertyForm.invalid) return;
    console.log(this.addPropertyForm.controls.name.value);
  }
}
