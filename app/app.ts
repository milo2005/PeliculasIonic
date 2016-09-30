import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {LoginPage} from './pages/login/login';

import {MovieService} from './providers/movies/movie.provider';
import {LocalService}  from './providers/local-storage/local.service';

import {HomePage} from './pages/home/home';

@Component({
  template: '<ion-nav #nav [root]="rootPage"></ion-nav>',
  providers:[MovieService, LocalService]
})
export class MyApp {
  @ViewChild("nav") nav;
  rootPage: any;

  constructor(public platform: Platform, private loc:LocalService) {
    loc.getData("logged").then((data)=>{
      if(data){
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
