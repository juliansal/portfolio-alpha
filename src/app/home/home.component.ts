import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	tsCode: string;

	constructor() {
		this.tsCode = `console.log('hello world');`;

	}

	code = `console.log("how are you?");`.trim();

	ngOnInit() {
	}

}
