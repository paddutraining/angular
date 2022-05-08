import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './projectNameValidator';
 import { AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent {
  status=['Stable', 'Critical', 'Finished']
  projectForm=new FormGroup({
    projectName:new FormControl(null,[
      Validators.required,
      CustomValidators.invalidProjectName],
      <AsyncValidatorFn>CustomValidators.asyncInvalidProjectName),
    email:new FormControl('',[Validators.required,Validators.email]),
    status:new FormControl('Critical')

  })
  submitForm(){
console.log(this.projectForm)
  }
}