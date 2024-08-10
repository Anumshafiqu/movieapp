import { Component } from '@angular/core';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-moiveapp',
  templateUrl: './moiveapp.component.html',
  styleUrl: './moiveapp.component.css'
})
export class MoiveappComponent {
  // movies: any[] = [];

  // constructor(private movieappservice:MovieAppService) {}

  // ngOnInit(): void {
  //   this.movieappservice.getPopularMovies().subscribe((data: any) => {
  //     this.movies = data.results;
  //   });
  // }





  movies: any[] = [];
  selectedMovie: any = null;
  searchQuery: string = '';

  constructor(private movieappService: MovieAppService) {}

  searchMovies() {
    if (this.searchQuery.trim()) {
      this.movieappService.searchMovies(this.searchQuery).subscribe((data) => {
        this.movies = data.results;
        this.selectedMovie = null;  // Clear selected movie when a new search is performed
      });
    }
  }

  viewMovieDetails(id: number) {
    this.movieappService.getMovieDetails(id).subscribe((data) => {
      this.selectedMovie = data;
    });
  }


  }


