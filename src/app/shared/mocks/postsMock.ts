import { Post } from '../models/Post';
import { postStyling } from './postStylesMock';

export const postsPromise: Promise<Post[]> = Promise.resolve([
	{
		id: 1,
		title: 'string',
		author: 'string',
		date: 'string',
		styling: postStyling,
		// tslint:disable-next-line:max-line-length
		body: '<p class="light"><span>This is the front end</span> of a jobs board website.</p>\
		<p class="light"><span>This is the front end</span> of a jobs board website.</p>',
		images: ['../../assets/img/lil-cloud.jpeg'],
	},
	{
		id: 2,
		title: 'string',
		author: 'string',
		date: 'string',
		styling: postStyling,
		body: 'string',
		images: [''],
	}
]);

