import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';    
  constructor(private http:Http) { 

  }

  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
  }

  deletePost(post){
    return this.http.delete(this.url+'/'+post.id);
  }
}
