import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/models/Post';

@Component({
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	constructor(private route: ActivatedRoute) { }
	posts: Post[];

	ngOnInit() {
		this.route.data.forEach((data: {posts: Post[]}) => {
			this.posts = data.posts;
		});
	}

}
