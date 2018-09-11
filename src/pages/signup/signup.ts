import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from '../../interfaces/user';
import { ChefsFridgeProvider } from '../../providers/chefs-fridge/chefs-fridge';
import {SignInPage} from '../../pages/sign-in/sign-in'
declare var firebase ;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {} as user ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chefsFridge: ChefsFridgeProvider) {

  }
  
  signUp(user :user){
    this.chefsFridge.SignUp(user.email ,user.password ,user.name, user.surname);
  }

  backToSignInPage(){
    this.navCtrl.push(SignInPage);
  }
}
