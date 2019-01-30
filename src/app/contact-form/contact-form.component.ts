import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x){
    console.log(x)
  }

  submitfirst(myfirstform){
    console.log(myfirstform);
  }

  contactMethods = [
    {id:1,value:'email'},
    {id:2,value:'phone'},
    {id:3,value:'fax'}
  ];

}
