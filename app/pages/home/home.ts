import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies/movie.provider";
import {Movie} from "../../providers/movies/movie";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  movies:Movie[];
  
  constructor(public navCtrl: NavController, private service:MovieService) {
    this.movies = service.data;
  }
}
