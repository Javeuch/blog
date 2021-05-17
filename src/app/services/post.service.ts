import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';  //! imports le 15/05/21
import 'firebase/database';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import Datasnapshot = firebase.database.DataSnapshot;   //! imports le 15/05/21

@Injectable()
export class PostService {


  /* Liste des posts */
  posts: Post[] = [];

/* Déclaration d'un Subject */
  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
    this.getPosts();
  }

  /* Méthode émettant des évènements pour répondre à un abonnement */
  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  // Sauvegarde des posts sur le serveur
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  // Récupère les posts depuis le serveur
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: Datasnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
      );
  }

  /* Récupère un post unique */
  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: Datasnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  /* Création d'un nouveau post */
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  /* Suppression d'un post */
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
          return postEl === post;
        }

    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  /* Suppression de tout les posts */
  removeAllPost(posts: number) {
    this.posts.splice(posts);
  }
}
