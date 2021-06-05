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
  constructor(private ds: DataServiceService, private router: Router,private route:ActivatedRoute) {
    this.initializePropertyForm();
    this.route.params.subscribe((params)=>
    {
      if(params?.id)
      {
         const id = +params['id'];
        console.log('Url Id: ',id);
        var data=this.ds.getPropertyBasedOnId(id);
        console.log(data);
        // this.addPropertyForm.patchValue(
        //   {
        //     name:data.name,
        //     description:data.description,
        //     size:data.size
        //   }
        // )
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
    console.log(
      this.addPropertyForm.controls.name.value +
        this.addPropertyForm.controls.description.value +
        this.addPropertyForm.controls.size.value
    );
    let obj: Property = {
      id:new Date().getMilliseconds(),
      name: this.addPropertyForm.controls.name.value,
      description: this.addPropertyForm.controls.description.value,
      size: this.addPropertyForm.controls.size.value
    };
    console.log('obj' + JSON.stringify(obj));
    this.ds.addProperty(JSON.stringify(obj));
    this.router.navigate(['']);
  }
}
