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
  ngOnInit() {
    this.getPopularMovies();
  }
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
  getPopularMovies() {
    this.movieappService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }









  // searchResults: any[] = [];
  // searchTerm: string = '';

  // constructor(private movieappService: MovieAppService) {}

  // searchMovies(): void {
  //   if (this.searchTerm.trim()) {
  //     this.movieappService.searchMovies(this.searchTerm).subscribe((data) => {
  //       this.searchResults = data.results;
  //     });
  //   }
  // }




  // searchMovies() {
  //   if (this.searchQuery.trim()) {
  //     this.movieappservice.searchMovies(this.searchQuery).subscribe((data) => {
  //       this.movies = data.results;
  //     });
  //   }
  // }


}
