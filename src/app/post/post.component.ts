
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Post } from './../shared/models/Post';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	constructor(private route: ActivatedRoute) {}
	post: Post;

	ngOnInit() {
		this.route.data.forEach((data: {post: Post}) => {
			this.post = data.post;
		});
		console.log(this.post);
	}

}


