import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Niveau } from 'src/app/enums/niveau-enum';
import { Sexe } from 'src/app/enums/sexe-enum';

import { EtudiantService } from 'src/app/services/etudiant.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './options-etudiant-add.component.html',
  styleUrls: ['./options-etudiant-add.component.css']
})
export class OptionsEtudiantAddComponent implements OnInit {

  form: any = {};
  level: any = {};
  gender: any = {};
  options: any = {};

  constructor(private etudiantService: EtudiantService, private router: Router,
    private optionsService: OptionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOptions(this.activatedRoute.snapshot.paramMap.get('id'));
    this.level = Object.keys(Niveau);
    this.gender = Object.keys(Sexe);
  }

  onSubmit(){
    this.etudiantService.saveEtudiant(this.form, this.options.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/options/detail/'+this.options.id]);
      },
      error => {
        console.log(error);
      }
    );
  }

  getOptions(id){
    this.optionsService.getOptions(id).subscribe(
      data => {
        this.options = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
