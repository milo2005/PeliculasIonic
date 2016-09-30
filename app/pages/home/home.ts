import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from "../../providers/movies/movie.provider";
import {Movie} from "../../providers/movies/movie";
import {LocalService} from '../../providers/local-storage/local.service';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  movies: Movie[];

  constructor(public navCtrl: NavController
    , private service: MovieService
    , private loc: LocalService
  ) {
    this.movies = service.data;
    loc.getData("user").then( (user) => {
      let u = JSON.parse(user);
      console.log("Usuario:"+u.user);
      console.log("Password:"+u.pass);
    });
  }
}
