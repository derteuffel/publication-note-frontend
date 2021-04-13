import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  user: User;
  id: number;
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    this.id = +localStorage.getItem('id');
    console.log(this.id);
  }


  getDoyenDashBoard(){
    console.log(this.id);
    this.router.navigateByUrl('faculties/detail/'+this.id);
  }

}
