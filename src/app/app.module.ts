import { PostService } from './shared/services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { appRouting } from './/app-routing.module';
import { PostComponent } from './post/post.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PostsComponent,
		ContactComponent,
		PostComponent
	],
	imports: [
		BrowserModule,
		appRouting
	],
	providers: [ PostService ],
	bootstrap: [AppComponent]
})
export class AppModule { }
