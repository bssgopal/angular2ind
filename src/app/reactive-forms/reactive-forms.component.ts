import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent{
  firstreactiveform: FormGroup;
   
  constructor(fb: FormBuilder) {
    this.firstreactiveform = fb.group({
      oldPassword : ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword : ['', Validators.required] ,
      confirmPassword : ['', Validators.required,PasswordValidators.passwordShouldMatch] ,
    },{
      validator:PasswordValidators.passwordShouldMatch
    });
   }

   get  oldPassword(){ return this.firstreactiveform.get('oldPassword'); }
   get  newPassword(){ return this.firstreactiveform.get('newPassword'); }
   get  confirmPassword(){ return this.firstreactiveform.get('confirmPassword'); }
   /* 1. check validation from components
   2. check validation u9sing funcitons
   3. check validation using validtions.ts */
  

}
