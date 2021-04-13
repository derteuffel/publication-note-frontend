import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Role } from './enums/role';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mbanu';

  currentUser: User;
  isAdmin: boolean;
  isNote: boolean;
  isPayment: boolean;
  isDoyen: boolean;
  constructor(private authService: AuthService, private router: Router){
    this.authService.currentUser.subscribe(data => {
      this.currentUser = data;
    })
  }


  getCurrentUser(){
    this.currentUser = this.authService.currentUserValue;
    if(this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.ROOT){
      this.isAdmin = true;
    }else if(this.currentUser.role == Role.PAIEMENT){
      this.isPayment = true;
    }else if(this.currentUser.role == Role.DOYEN){
      this.isDoyen = true;
    }else if(this.currentUser.role == Role.NOTE){
      this.isNote = true;
    }
  }
}
