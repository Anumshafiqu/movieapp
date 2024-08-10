import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAppService } from '../movie-app.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any = {};

  constructor(private movieappService: MovieAppService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieappService.getMovieDetails(+id).subscribe((data) => {
        this.movie = data;
      });
    }
  }
}
