import { Post } from '../models/Post';
import { postStyling } from './postStylesMock';

export const postsPromise: Promise<Post[]> = Promise.resolve([
	{
		id: 5,
		title: '10 Things You Didn\'t Know About Clouds',
		author: 'Melissa Cox',
		date: '02/08/2018',
		styling: postStyling,
		// tslint:disable-next-line:max-line-length
		body: '<p class="light"><span>This is the front end</span> of a jobs board website.</p>\
		<p class="light"><span>This is the front end</span> of a jobs board website.</p>',
		images: ['../../assets/img/lil-cloud.jpeg'],
		client: 'Julian Design Studio',
		project_url: '#',
		skills: ['CSS', 'HTML', 'JavaScript', 'UI/UX Design', 'Angular', 'Laravel']
	},
	{
		id: 4,
		title: '10 Things You Didn\'t Know About Clouds',
		author: 'Bill Jimenez',
		date: '01/24/2018',
		styling: postStyling,
		body: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p>Sed odio repellendus,\
		 illum assumenda deleniti dolor nisi amet exercitationem rerum ex pariatur nostrum\
		  voluptatem nihil quidem neque nemo sapiente voluptatibus modi?</p><p>Lorem, ipsum\
		  dolor sit amet consectetur adipisicing elit.</p><p>Sed odio repellendus,\
		  illum assumenda deleniti dolor nisi amet exercitationem rerum ex pariatur nostrum\
		  voluptatem nihil quidem neque nemo sapiente voluptatibus modi?</p>',
		images: ['../../assets/img/lil-whale.jpeg'],
		client: 'Julian Design Studio',
		project_url: '#',
		skills: ['CSS', 'HTML', 'JavaScript', 'UI/UX Design', 'Angular', 'Laravel']
	},
	{
		id: 2,
		title: '10 Things You Didn\'t Know About Clouds',
		author: 'Kate Smith',
		date: '12/11/2017',
		styling: postStyling,
		body: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odio repellendus,\
		 illum assumenda deleniti dolor nisi amet exercitationem rerum ex pariatur nostrum\
		  voluptatem nihil quidem neque nemo sapiente voluptatibus modi?</p>',
		images: ['../../assets/img/lil-whale.jpeg'],
		client: 'Julian Design Studio',
		project_url: '#',
		skills: ['CSS', 'HTML', 'JavaScript', 'UI/UX Design', 'Angular', 'Laravel']
	},
	{
		id: 1,
		title: '10 Things You Didn\'t Know About Clouds',
		author: 'Jimmy Green',
		date: '12/04/2017',
		styling: postStyling,
		body: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed odio repellendus,\
		 illum assumenda deleniti dolor nisi amet exercitationem rerum ex pariatur nostrum\
		  voluptatem nihil quidem neque nemo sapiente voluptatibus modi?</p>',
		images: ['../../assets/img/lil-whale.jpeg'],
		client: 'Julian Design Studio',
		project_url: '#',
		skills: ['CSS', 'HTML', 'JavaScript', 'UI/UX Design', 'Angular', 'Laravel']
	}
]);

