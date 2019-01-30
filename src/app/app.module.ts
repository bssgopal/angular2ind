import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'
import  {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsComponent } from './posts/posts.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PostService } from './posts/post.service';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostsComponent,
    HeroesComponent,
    CoursesComponent,
    LikeComponent,
    ContactFormComponent,
    ReactiveFormsComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'createpost',component:PostCreateComponent},
      {path:'post',component:PostsComponent},
      {path:'heroes',component:HeroesComponent},
      {path:'courses',component:CoursesComponent},
      {path:'like',component:LikeComponent},
      {path:'contact',component:ContactFormComponent},
      {path:'reactiveforms',component:ReactiveFormsComponent}
    ])
  ],
  providers: [
    PostService,
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
