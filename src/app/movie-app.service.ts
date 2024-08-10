import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieAppService {

  // private apiKey = '3623b8bd29f1b52dbf09280834da50db';
  // private apiUrl = 'https://api.themoviedb.org/3/search/movie';

  // constructor(private http: HttpClient) { }

  // searchMovies(query: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}&query=${query}`);
  // }













  // private apiKey = '3623b8bd29f1b52dbf09280834da50db';
  // private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  // private detailsUrl = 'https://api.themoviedb.org/3/movie';

  // constructor(private http: HttpClient) { }

  // searchMovies(query: string): Observable<any> {
  //   return this.http.get<any>(`${this.searchUrl}?api_key=${this.apiKey}&query=${query}`);
  // }

  // getMovieDetails(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.detailsUrl}/${id}?api_key=${this.apiKey}`);
  // }


  private apiKey = '3623b8bd29f1b52dbf09280834da50db';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }


}
