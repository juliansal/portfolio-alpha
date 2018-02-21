import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable()
export class PostService {

	// get all posts
	getPosts() {
		return postsPromise;
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
	}
]);
