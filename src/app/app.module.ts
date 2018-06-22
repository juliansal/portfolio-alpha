import { element } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { appRouting } from './/app-routing.module';
import { SkillsbarComponent } from './skillsbar/skillsbar.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactComponent,
		SkillsbarComponent,
		LatestArticlesComponent,
		PrismComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		appRouting
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
