import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './options-etudiant-detail.component.html',
  styleUrls: ['./options-etudiant-detail.component.css']
})
export class OptionsEtudiantDetailComponent implements OnInit {

  etudiant: any = {};
  constructor(private etudiantService: EtudiantService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEtudiant(this.activatedRouter.snapshot.paramMap.get('id'));
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

  delete(){
    this.etudiantService.deleteEtudiant(this.etudiant.id).subscribe(
      data => {
        console.log('You deleted a student successfuly');
        this.router.navigateByUrl('etudiants/home');
      },
      error => {
        console.log(error);
      }
    );
  }


}
