import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { postsPromise } from '../mocks/postsMock';


@Injectable()
export class PostService {

	// get all posts
	getPosts() {
		return postsPromise;
	}

	getPost(id) {
		const post = postsPromise.then(posts => {
			return posts.find(singlePost => {
				return singlePost.id.toString() === id;
			});
		});
		return post;
	}


}
