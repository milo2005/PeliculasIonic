import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {LocalService} from '../../providers/local-storage/local.service';

@Component({
    templateUrl:'build/pages/login/login.html'
})
export class LoginPage {

    user:string;
    pass:string;

    constructor(private nav:NavController, private loc:LocalService){
        
    }

    goToHome(){
        console.log("Usuario:"+this.user+" Password:"+this.pass);

        this.loc.setData("logged", true);
        this.loc.setData("user",JSON.stringify({user: this.user, pass:this.pass}));
        this.nav.setRoot(HomePage);
        
    }

}