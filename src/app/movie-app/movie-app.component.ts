import { Component } from '@angular/core';
import { MovieAppService } from '../movie-app.service';
import { Route ,} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-app',
  templateUrl: './movie-app.component.html',
  styleUrl: './movie-app.component.css'
})
export class MovieAppComponent {
  // movie: any;

  // constructor(private Route: ActivatedRoute,private movieService: MovieAppService) {}

  // ngOnInit(): void {
  //   const id = this.Route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.movieService.getMovieDetails(+id).subscribe((data: any) => {
  //       this.movie = data;
  //     });
  //   }
  // }
}
