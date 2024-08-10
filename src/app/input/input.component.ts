import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  keyup = this.movieSerivce.keyupSubject;
constructor (private movieSerivce:MovieService){}
ngOnInit(): void {
  
}









}
