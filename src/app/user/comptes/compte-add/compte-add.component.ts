import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { SignupInfo } from 'src/app/auth/requests/signup-info';
import { Role } from 'src/app/enums/role';
import { Sexe } from 'src/app/enums/sexe-enum';
import { UserRequest } from 'src/app/models/user-request';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte-add',
  templateUrl: './compte-add.component.html',
  styleUrls: ['./compte-add.component.css']
})
export class CompteAddComponent implements OnInit {

  form: any = {};
  rolesList: any = {};
  userRequest: UserRequest;
  gender: any = {};
  accesses: any = {};
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(): void {

    this.rolesList = Object.keys(Role);
    this.gender = Object.keys(Sexe);
    this.accesses = Object.keys(Role);
  }

  onSubmit(){


    this.userRequest = new UserRequest(
       this.form.name,
       this.form.firstName,
       this.form.lastName,
       this.form.email,
       this.form.matricule,
       this.form.telephone,
       this.form.numIdentite,
       this.form.birthDate,
       this.form.adressePhysique,
       this.form.sexe,
       this.form.fonction,
       this.form.roles

    )

    this.compteService.addCompte(this.userRequest).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/comptes/home']);
      },
      error => {
        console.log(error);
      }
    );
  

  }

}
