import { element } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
		LatestArticlesComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		appRouting
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
