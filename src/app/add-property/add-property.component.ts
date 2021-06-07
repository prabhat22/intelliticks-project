import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../models/property';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  addPropertyForm: FormGroup;
  id:Number=null;
  propertyToUpdate:Property;
  constructor(private ds: DataServiceService, private router: Router,private route:ActivatedRoute) {
    this.initializePropertyForm();
    this.route.params.subscribe((params)=>
    {
      if(params?.id)
      {
          this.id = +params['id'];
        console.log('Url Id: ',this.id);
         this.propertyToUpdate=this.ds.getPropertyBasedOnId(this.id);
        console.log(this.propertyToUpdate);
        this.addPropertyForm.patchValue(
          {
            name:  this.propertyToUpdate.name,
            description:  this.propertyToUpdate.description,
            size:  this.propertyToUpdate.size
          }
        )
      }
    })

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

  
    if(this.id!=null)
    {
     let obj: Property = {
      id:  this.propertyToUpdate.id,
      name: this.addPropertyForm.controls.name.value,
      description: this.addPropertyForm.controls.description.value,
      size: this.addPropertyForm.controls.size.value
    };
    this.ds.updateProperty(obj);
    }
    else
    {
      let obj: Property = {
      id:  new Date().getMilliseconds(),
      name: this.addPropertyForm.controls.name.value,
      description: this.addPropertyForm.controls.description.value,
      size: this.addPropertyForm.controls.size.value
    };
   this.ds.addProperty(obj);
    }
    this.router.navigate(['']);
  }
}
