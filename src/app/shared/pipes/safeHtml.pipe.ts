import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'safe'})
export class SafeHtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	// transform(val) {
	// 	return this.sanitizer.bypassSecurityTrustHtml(val);
	// 	// return this.sanitizer.bypassSecurityTrustStyle(val);
	// }

	public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		switch (type) {
			case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
	}
}
