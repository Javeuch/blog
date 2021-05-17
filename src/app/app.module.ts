import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './services/post.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Constante de routage de type Routes */
const appRoutes: Routes = [
  { path: 'posts',  component: PostListComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
