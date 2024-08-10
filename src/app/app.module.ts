import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchNotfoundComponent } from './search-notfound/search-notfound.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchSkeletonComponent } from './search-skeleton/search-skeleton.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoiveappComponent } from './moiveapp/moiveapp.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import { SearchcomponentComponent } from './searchcomponent/searchcomponent.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchDetailComponent,
    SearchNotfoundComponent,
    SearchResultComponent,
    SearchSkeletonComponent,
    MoiveappComponent,
    MovieAppComponent,
    SearchcomponentComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
