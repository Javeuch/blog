import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  /* J'injecte le service */
  constructor(private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
  }

  /* Méthode: récupère les données du formulaire */
  onSubmit(form: NgForm) {
    const title   = form.value['title'];
    const content = form.value['content'];
    const createAt = form.value['createAt'];

    this.postService.addPost(title, content, createAt);
    this.router.navigate(['/posts']);
  }
}
