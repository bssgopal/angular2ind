import { Component } from '@angular/core';
import {PostService} from './post.service'
import {OnInit} from '@angular/core';


@Component({
	selector : 'posts',
	templateUrl : './post-create/post-create.component.html'
})

export class PostsComponent implements OnInit{
     posts : any[];
    
    constructor(private service : PostService){
        
    }

    ngOnInit(){
        this.service.getPosts()
        .subscribe(response=>{
            this.posts = response.json();
        },(error:Response)=>{
            if(error.status==400)
            alert('Unexpected error occured while fetching data.');
            //this.form.setErrors(error.json())
            
            console.log(error);
        });
     }
	
	 createPost(input: HTMLInputElement){
         let post = { title: input.value };
         input.value= '';
            this.service.createPosts(post)
            .subscribe(response=>{
                post['id']=response.json().id;
                this.posts.splice(0,0,post);
            },error=>{
                alert('Unexpected error occured while creating  post');
                console.log(error);
            });
     }


     updatePost(post){
        this.service.updatePost(post)
        .subscribe(response=>{
            console.log(response);
        },error=>{
            alert('Unexpected error occured while updating post.');
            console.log(error);
        });
     }

     deletePost(post){
        this.service.deletePost(post)
        .subscribe(
            response=>{
                let index = this.posts.indexOf(post);
                this.posts.splice(index,1);
            },(error:Response)=>{
                if(error.status)
                alert(error.status)
                alert('Unexpected error occured while deleting post.');
                console.log(error);
            }
            )
     }

     
}

 