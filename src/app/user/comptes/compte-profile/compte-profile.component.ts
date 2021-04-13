import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte-profile',
  templateUrl: './compte-profile.component.html',
  styleUrls: ['./compte-profile.component.css']
})
export class CompteProfileComponent implements OnInit {

  profile: any = {};
  compte: any = {};
  constructor(private activatedRoute: ActivatedRoute, private compteService: CompteService) { }

  ngOnInit(): void {
    this.getCompte(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getCompte(id){
    this.compteService.getCompte(id).subscribe(
      data => {
        this.compte = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
