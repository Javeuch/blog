import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';


@Injectable()
export class PostsService {

  postsSubject = new Subject<Post[]>();

  /* Liste des posts */
  posts:Post[] = [
    {
      id: 0,
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      createAt: Date()
    },

    {
      id: 1,
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      createAt: Date()
    },
    {
      id: 2,
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      createAt:  Date()
    }
  ];

  constructor() { }

  addPost(title: string, content: string, createAt:string) {
    const postObject = {
      id     : 0,
      title  : '',
      content: '',
      createAt: Date()
    };
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    postObject.title   = title;
    postObject.content = content;
    postObject.createAt = createAt;

    this.posts.push(postObject);
    this.emitPost();
  }

  emitPost() {
    this.postsSubject.next(this.posts);
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        return postEl === post;
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPost();
  }
  savePosts() { }

}
