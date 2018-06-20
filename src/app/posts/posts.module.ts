import { PostsResolve } from './posts-resolve.service';
import { PostResolve } from '../post/post-resolve.service';
import { PostService } from './../shared/services/post.service';
import { PostsComponent } from './posts.component';
import { PostComponent } from '../post/post.component';
import { postsRouting } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSectionComponent } from './posts-section.component';
import { SafeHtmlPipe } from '../shared/pipes/safeHtml.pipe';
import { ExcerptPipe } from './../shared/pipes/excerpt.pipe';

@NgModule({
	imports: [
		CommonModule, postsRouting
	],
	declarations: [
		PostComponent, PostsComponent, PostsSectionComponent, SafeHtmlPipe, ExcerptPipe
	],
	exports: [SafeHtmlPipe, ExcerptPipe],
	providers: [
		PostService, PostResolve, PostsResolve
	]
})
export class PostsModule { }
