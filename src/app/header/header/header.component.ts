import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  isAdmin: boolean;
  isNote: boolean;
  isPayment: boolean;
  isDoyen: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(error);
      }
    );
    
  }

  getCurrentUser(){
    this.currentUser = this.authService.currentUserValue;
    if(this.currentUser.role === Role.ADMIN || this.currentUser.role === Role.ROOT){
      this.isAdmin = true;
    }else if(this.currentUser.role === Role.PAIEMENT){
      this.isPayment = true;
    }else if(this.currentUser.role === Role.DOYEN){
      this.isDoyen = true;
    }else if(this.currentUser.role === Role.NOTE){
      this.isNote = true;
    }
    
  }

}
