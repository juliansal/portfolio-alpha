import { PostsResolve } from './posts-resolve.service';
import { PostResolve } from './post-resolve.service';
import { PostService } from './../shared/services/post.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post.component';
import { postsRouting } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSectionComponent } from './posts-section.component';

@NgModule({
	imports: [
		CommonModule, postsRouting
	],
	declarations: [
		PostComponent, PostsComponent, PostsSectionComponent
	],
	providers: [
		PostService, PostResolve, PostsResolve
	]
})
export class PostsModule { }
