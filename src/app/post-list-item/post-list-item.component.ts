import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  content!: string;
  @Input()
  loveIts: number=0;
  @Input()
  dontLoveIts: number=0;
  @Input()
  create_at!: Date;

  /* On injecte le post.service */
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
  }
  onLove() {
    this.loveIts++;
  }
  onDontLove() {
    this.dontLoveIts++;
  }

  /* suppression d'un post */
  onDeletePost() {
    /**
     * TODO: removePost()
     * this.postsService.removePost(post);
     */
  }
}
