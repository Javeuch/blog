import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post!: Post;

  @Input()
  title: string = '';
  @Input()
  content: string = '';
  @Input()
  loveIts: number = 0;
  @Input()
  dontLoveIts: number = 0;
  @Input()
  createAt= new Date;


  /* On injecte le post.service */
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLove() {
    this.loveIts++;
  }

  onDontLove() {
    this.dontLoveIts++;
  }

  /* Méthode de suppression d'un post */
  onDeletePost() {
    this.postsService.removePost(this.post);
  }
}
