import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from './../shared/services/post.service';
import { Post } from './../shared/models/Post';

@Injectable()
export class PostsResolve implements Resolve<Post[]> {
	constructor(private service: PostService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.service.getPosts().then(posts => {
			return posts;
		});
	}

}
