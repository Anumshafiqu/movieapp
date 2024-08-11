import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { debounce, debounceTime, distinctUntilChanged, filter, map, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Movieapps';
  skeletonArr = Array(5);
  keyupSubs !: Subscription;
  searchresults:any[] = [];
  searchResults :any[] = [];
  notFound = false;
  isloading = false;
  searchstring:string = '';
  constructor(private movieservice:MovieService) { }
  ngOnInit(): void {
this.keyupSubs = this.movieservice.keyupSubject
.pipe(
  map((e:any) => e.target.value),
  filter(Boolean),
  debounceTime(1000),
  distinctUntilChanged(),
  tap((str)=>{
    this.searchResults = [] ; 
    this.isloading = true;
    this.searchstring = str
  }),
  switchMap((search)=>this.movieservice.fetchMovies(search))
)
.subscribe({
  next: (response:any) =>{
    this.notFound = false;
    if(response.results.length){
      this.searchResults = response.results;

    }else{
      this.notFound = true;
    }
    this.isloading = false;
    
  },
  error:(err) =>{
    this.isloading = false;
    console.log(err);

  }
})
  }
  ngOnDestroy(): void {
    if(this.keyupSubs) this.keyupSubs.unsubscribe();

  }














}
