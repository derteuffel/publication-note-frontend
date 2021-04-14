import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';
import { CompteService } from 'src/app/services/compte.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  user: User;
  id: number;
  constructor(private router: Router, private authService: AuthService) {
    this.user = authService.currentUserValue;
   }

  ngOnInit(): void {
    this.id = +localStorage.getItem('id');
    console.log(this.id);
  }


  getDoyenDashBoard(){
    console.log(this.id);
    if(this.user.role === Role.DOYEN){
    this.router.navigateByUrl('faculties/detail/'+this.id);
    }else if( this.user.role === Role.ROOT || this.user.role === Role.ADMIN){
      this.router.navigateByUrl('home');
    } 
    
  }

}
