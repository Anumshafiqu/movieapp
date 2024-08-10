import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-searchcomponent',
  templateUrl: './searchcomponent.component.html',
  styleUrl: './searchcomponent.component.css'
})
export class SearchcomponentComponent {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private movieappService: MovieAppService, private router: Router) {}

  searchMovies() {
    if (this.searchQuery.trim()) {
      this.movieappService.searchMovies(this.searchQuery).subscribe((data) => {
        this.movies = data.results;
      });
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/movie', id]);
  }
}
