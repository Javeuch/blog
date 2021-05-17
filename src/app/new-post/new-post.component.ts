import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector   : 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls  : ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router     : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title   : ['', Validators.required],
      content : ['', Validators.required],
      loveIts : 0,
      createAt: ''
    });
  }

  onSavePost() {
    const title    = this.postForm.get('title').value;
    const content  = this.postForm.get('content').value;
    const loveIts  = this.postForm.get('loveIts').value;
    const createAt = this.postForm.get('createAt').value;
    const newPost  = new Post(title, content, loveIts, createAt);

    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
