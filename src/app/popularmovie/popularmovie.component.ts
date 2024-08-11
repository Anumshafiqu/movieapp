import { Component } from '@angular/core';
import { PopularappService } from '../popularapp.service';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-popularmovie',
  templateUrl: './popularmovie.component.html',
  styleUrl: './popularmovie.component.css'
})
export class PopularmovieComponent {
  popularMovies: any[] = [];

  constructor(private movieappService: MovieAppService) {}

  ngOnInit(): void {
    this.movieappService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
    });
  }
}
