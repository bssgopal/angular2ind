import { Component,Input } from '@angular/core';
import {CoursesClickedEventArgs} from './courses/courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Tour of Heroes.';


  onCoursesClicked(eventArgs : CoursesClickedEventArgs){
    console.log("clicked on courses component",eventArgs);
  }

  tweet ={
    body : '...',
    likesCount : 10,
    isLiked : true
  }
}
