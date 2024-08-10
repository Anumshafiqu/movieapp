import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-skeleton',
  templateUrl: './search-skeleton.component.html',
  styleUrl: './search-skeleton.component.css'
})
export class SearchSkeletonComponent implements OnInit{

  constructor (){}
  @Input() skeletons :any[] = []
  ngOnInit(): void {
    
  }

}
