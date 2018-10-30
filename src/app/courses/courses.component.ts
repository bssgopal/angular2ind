import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title ='List of courses (its called reference by function)';

  getTitle(){
    return this.title;  
  }

  courses_list =  ["course1","course2","course3"];
  service_co_list;

  constructor(){
    let service_obj = new CoursesService();
    this.service_co_list = service_obj.getServiceCourse();
  }
}
