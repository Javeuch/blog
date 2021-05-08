import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  /* Liste des posts se trouvant dans le service */
  posts: any[] = [];

  constructor(private postService : PostsService) {

  }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

  ngOnDestroy() {
    /**
     * TODO:
     *  this.counterSubscription.unsubscribe(); */
  }
}
