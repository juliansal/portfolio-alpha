import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const newLocal = 'app/posts/posts.module#PostsModule';
const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'posts', loadChildren: newLocal},
	{ path: 'contact', component: ContactComponent},
	{ path: '**', component: HomeComponent},
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
