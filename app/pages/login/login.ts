import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
    templateUrl:'build/pages/login/login.html'
})
export class LoginPage {

    user:string;
    pass:string;

    constructor(private nav:NavController){
        
    }

    goToHome(){
        console.log("Usuario:"+this.user+" Password:"+this.pass);
        this.nav.push(HomePage);
        
    }

}