import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector   : 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls  : ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title   : string;
  @Input() content : string;
  @Input() createAt: Date;
  @Input() loveIts : number;
  @Input() post    : Post;

  constructor(private postService: PostService) { }

  ngOnInit() { }

  onLoveIt() {
    this.loveIts++;
    this.post.loveIts = this.loveIts;
    this.postService.savePosts();
  }

  onDontLoveIt() {
    this.loveIts--;
    this.post.loveIts = this.loveIts;
    this.postService.savePosts();
  }

  onDeletePost(post: Post) {
    const confirmation = confirm('Voulez-vous supprimer ce post?');
    if (confirmation) {
      this.postService.removePost(post);
    }
  }
}
