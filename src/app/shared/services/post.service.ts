import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

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

const postsPromise: Promise<Post[]> = Promise.resolve([
	{
		id: 1,
		title: 'string',
		author: 'string',
		date: 'string',
		body: 'string',
		images: [''],
	},
	{
		id: 2,
		title: 'string',
		author: 'string',
		date: 'string',
		body: 'string',
		images: [''],
	}
]);
