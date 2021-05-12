import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';  //* Import du service
import { RouterModule, Routes } from '@angular/router';

/* Constante de routage de type Route */
const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //todo ajouter le ReactiveFormsModule après...
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],    //* ajout du service
  bootstrap: [AppComponent]
})
export class AppModule { }
