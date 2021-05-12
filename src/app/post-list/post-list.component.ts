import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService : PostsService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}
