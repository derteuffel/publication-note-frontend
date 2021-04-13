import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departement-update',
  templateUrl: './departement-update.component.html',
  styleUrls: ['./departement-update.component.css']
})
export class DepartementUpdateComponent implements OnInit {

  departement: any = {};
  constructor(private departementService: DepartementService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartement(this.activatedRoute.snapshot.paramMap.get('id'));
  }


  getDepartement(id){
    this.departementService.getDepartement(id).subscribe(
      data => {
        this.departement = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    this.departementService.updateDepartement(this.departement.id, this.departement).subscribe(
      data => {
        console.log(data);
        console.log('Your departement has been updated successfuly');
        this.router.navigateByUrl('departements/detail/'+this.departement.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
