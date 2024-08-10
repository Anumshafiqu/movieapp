import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of  } from 'rxjs';
import { Enviroment } from './enviroment/Enviroment';
import { Optional } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

   public keyupSubject = new Subject<KeyboardEvent>();
  constructor(private httpclient:HttpClient) { }

  fetchMovies(search:string): Observable<any>{
  return  this.httpclient.get(Enviroment.endpoint + search);


  }

























 


}
