import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'safe'})
export class SafeHtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		const length = 240;
		switch (type) {
			case 'html': {
				// value = value.replace(/<[^>]+>/g, '').substr(0, length);
				return this.sanitizer.bypassSecurityTrustHtml(value);
			}
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}

	}
}
