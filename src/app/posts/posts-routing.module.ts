import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PostsSectionComponent } from './posts-section.component';
import { PostResolve } from './post-resolve.service';
import { PostsResolve } from './posts-resolve.service';
import { PostComponent } from './post.component';
import { PostsComponent } from './posts.component';


const postsRoutes: Routes = [
	{
		path: '',
		component: PostsSectionComponent,
		children: [
			{
				path: '',
				component: PostsComponent,
				resolve: {
					posts: PostsResolve
				}
			},
			{
				path: ':id',
				component: PostComponent,
				resolve: {
					post: PostResolve
				}
			}
		]
	}
];
export const postsRouting: ModuleWithProviders = RouterModule.forChild(postsRoutes);

