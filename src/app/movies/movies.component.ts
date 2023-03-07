import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    moviename:String='hello'
  constructor(public moviesService:MoviesDataService) { }

  ngOnInit(): void {
    this.moviesService.getValue();
  }

}
