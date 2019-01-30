import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CoursesComponent {

  title ='List of courses (its called reference by function)';
  @Input ('is-alias') isalias : boolean;
  @Output() click = new EventEmitter();

  getTitle(){
    return this.title;  
  }

  courses_list =  ["course1","course2","course3"];
  service_co_list;

  constructor(service : CoursesService){
    this.service_co_list = service.getServiceCourse();
    
  }

  onClick(){
    this.isalias = !this.isalias;
    this.click.emit(this.isalias);
  }

  
}


export interface CoursesClickedEventArgs{
  newValue : boolean
}