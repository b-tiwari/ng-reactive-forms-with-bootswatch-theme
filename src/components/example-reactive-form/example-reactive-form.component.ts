import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css']
})
export class ExampleReactiveFormComponent implements OnInit {
  userDetailsForm: FormGroup;
  formValidation = {
    valid: '',
    nameValid: '',
    emailValid: ''
  }

  constructor() { }

  ngOnInit() {
    this.userDetailsForm = new FormGroup ({
      name: new FormControl('John'),
      email: new FormControl('john@gmail.com')
    });
  }

  submitUserDetails = (formGrp: FormGroup) => {
    if (!formGrp.valid) {
      this.formValidation.valid = 'Form filled incorrectly, please correct the form ';
      return false;
    }
    const userDetails = {
      name: formGrp.value.name,
      email: formGrp.value.email
    }
    console.log('Entered User datils', userDetails);

  }

}
