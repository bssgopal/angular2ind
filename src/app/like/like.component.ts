import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  courses = [1,2];
  temp_courses_list = [
    {id:1,cname:'j'},
    {id:2,cname:'p'},
    {id:3,cname:'m'}
  ]
  viewMode ="list";
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @Input ('likescount') likescount :number;
  @Input ('isActive') isActive :boolean;

  onClick(){
    this.likescount = (this.isActive) ? this.likescount-1 : this.likescount+1;
    this.isActive = !this.isActive;
  }

}
