import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PostService } from './../shared/services/post.service';
import { Post } from './../shared/models/Post';

@Injectable()
export class PostResolve implements Resolve<Post> {
	constructor(private service: PostService, private router: Router) {}

	resolve(route: ActivatedRouteSnapshot) {
		const id = route.params['id'];
		return this.service.getPost(id).then(post => {
			if (post) {
				return post;
			} else {
				this.router.navigate(['post']);
			}
		});
	}
}
