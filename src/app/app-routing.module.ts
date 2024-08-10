import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { MoiveappComponent } from './moiveapp/moiveapp.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: SearchcomponentComponent },
  { path: 'movie-detail', component: MovieDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
