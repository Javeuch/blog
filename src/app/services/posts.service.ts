export class PostsService {
  /* Liste des posts */
  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      loveIts: 0,
      create_at: new Date()
    },

    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      loveIts: 0,
      create_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      loveIts: 0,
      create_at: new Date()
    }
  ];
  constructor() {
    this.getPosts()
  }

  getPosts() {
/**
 * TODO
 */

  }
  emitPosts() {
   /**
    * TODO
    * this.postsSubject.next(this.posts);
    *  */
  }

  /* Méthode de suppression d'un post */
/**
 *TODO:
 const bookIndexToRemove = this.posts.findIndex(
      (postEl) => {
        return postEl === post;
        }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  */
}
