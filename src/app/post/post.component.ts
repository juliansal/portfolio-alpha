import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/models/Post';
import { PostService } from './../shared/services/post.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	posts: Post[];
	constructor(private service: PostService) { }

	ngOnInit() {
		this.service.getPosts().then(posts => {
			this.posts = posts;
		});
	}

}
