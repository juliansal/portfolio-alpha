import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'excerpt'})
export class ExcerptPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	public transform(text: any, length: number): SafeHtml {
		text = text.replace(/<[^>]+>/g, '').substr(0, length);
		return this.sanitizer.bypassSecurityTrustHtml(text);
	}
}
