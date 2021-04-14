import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.css']
})
export class FacultyDetailComponent implements OnInit {

  lists: any = {};
  isListNull: boolean;
  faculte: any = {};
  message: string;

  fileForm: FormGroup;
  constructor(private facultyService: FacultyService, private activatedRoute: ActivatedRoute,
    private departementService: DepartementService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getFaculty(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.fileForm = this.fb.group({
      file: ['']
    });
  }

  getFaculty(id){
    this.facultyService.getFaculty(id).subscribe(
      data => {
        this.faculte = data;
        console.log(data);
        this.getAllDepartement(data.id);
      }
    );
  }

  getAllDepartement(id){
    this.departementService.getAllByFaculty(id).subscribe(
      data => {
        this.lists = data;
        console.log(data);
        if(data === null){
          this.isListNull = true;
        }else{
          this.isListNull = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  reload(){
    window.location.reload();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if(!this.validateFile(file.name)){
        console.log('Selected file format is not supported, try to choose excel file');
        this.message = 'Le type de fichier choisis n est pas supporter, veuillez choisir un fichier excel';
      }else{
      this.fileForm.get('file').setValue(file);
      }
    }
  }

  onSubmit(){
    
    const formData = new FormData();
    formData.append('file', this.fileForm.get('file').value);
    this.departementService.saveDepartements(formData, this.faculte.id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xlsx' || ext.toLowerCase() == 'xls') {
        return true;
    }
    else {
        return false;
    }
  }



}
