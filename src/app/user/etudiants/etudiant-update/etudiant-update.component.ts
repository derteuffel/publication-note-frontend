import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveau } from 'src/app/enums/niveau-enum';
import { Sexe } from 'src/app/enums/sexe-enum';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-update',
  templateUrl: './etudiant-update.component.html',
  styleUrls: ['./etudiant-update.component.css']
})
export class EtudiantUpdateComponent implements OnInit {

  etudiant: any = {};
  gender: any = {};
  level: any = {};

  constructor(private etudiantService: EtudiantService, private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.getEtudiant(this.activatedRoute.snapshot.paramMap.get('id'));
    this.gender = Object.keys(Sexe);
    this.level = Object.keys(Niveau);
  }

  getEtudiant(id){
    this.etudiantService.getEtudiant(id).subscribe(
      data => {
        this.etudiant = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    this.etudiantService.updateEtutiant(this.etudiant, this.etudiant.id).subscribe(
      data => {
        console.log('Your student are updated successfully');
        this.route.navigate(['/etudiants/detail/'+this.etudiant.id]);
      },
      error => {
        console.log(error);
      }
    );
  }

}
