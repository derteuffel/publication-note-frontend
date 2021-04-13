import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-faculty-update',
  templateUrl: './faculty-update.component.html',
  styleUrls: ['./faculty-update.component.css']
})
export class FacultyUpdateComponent implements OnInit {

  faculte: any = {};

  constructor(private facultyService: FacultyService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFaculte(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getFaculte(id){
    this.facultyService.getFaculty(id).subscribe(
      data => {
        this.faculte = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    console.log(this.faculte);
    this.facultyService.updateFaculty(this.faculte.id, this.faculte).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('faculties/detail/'+this.faculte.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
