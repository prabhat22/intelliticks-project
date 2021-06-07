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
  id:String=null;
  propertyToUpdate:any;
  constructor(private ds: DataServiceService, private router: Router,private route:ActivatedRoute) {
    this.initializePropertyForm();
    this.route.params.subscribe((params)=>
    {
      if(params?.id)
      {
          this.id = params['id'];
        console.log('Url Id: ',this.id);
         this.propertyToUpdate=this.ds.getPropertyBasedOnId(this.id);
        console.log(this.propertyToUpdate);
        this.addPropertyForm.patchValue(
          {
            name:  this.propertyToUpdate.fields.name,
            description:  this.propertyToUpdate.fields.description,
            size:  this.propertyToUpdate.fields.size
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
      id:  this.propertyToUpdate.fields.id,
      name: this.addPropertyForm.controls.name.value,
      description: this.addPropertyForm.controls.description.value,
      size: this.addPropertyForm.controls.size.value
    };
    this.ds.updateProperty(this.id,obj).subscribe((data)=>
    {
      this.router.navigate(['']);
    });
    }
    else
    {
      let obj: Property = {
      id:  new Date().getMilliseconds(),
      name: this.addPropertyForm.controls.name.value,
      description: this.addPropertyForm.controls.description.value,
      size: this.addPropertyForm.controls.size.value
    };
   this.ds.addProperty(obj).subscribe((data)=>
   {
     this.router.navigate(['']);
   });
  
    }
  
  }
}
