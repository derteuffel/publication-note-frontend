import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/role';
import { FacultyService } from 'src/app/services/faculty.service';
import { AuthService } from '../auth.service';
import { LoginInfo } from '../requests/login-info';
import { Parametre } from '../requests/parametre';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  
  private loginInfo: LoginInfo;
  faculty: any = {};
  isLoginFailed: boolean;
  errorMessage: any;
  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue){
      this.router.navigateByUrl('login/success');
    }
  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService.login(this.loginInfo).subscribe(
      
      data => {
        console.log(' login action');
        console.log(data);
        console.log(this.authService.currentUserValue.role)
        console.log(this.authService.currentUserValue.id);
        this.router.navigateByUrl('login/success');
        localStorage.setItem('id',this.authService.currentUserValue.id+'');
        //this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    this.router.navigateByUrl('/boutiques');
  }
}
