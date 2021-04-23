import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { OptionsService } from 'src/app/services/options.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  form: FormGroup;
  faculties: any = {};
  departements: any = {};
  optionses: any = {};
  message: string;

  constructor(private fb: FormBuilder, private postService: PostService, private facultyService: FacultyService,
    private departementService: DepartementService, private optionsService: OptionsService,
    private router: Router) { 
      this.form = this.fb.group({
        title: [''],
        facultyId: [''],
        departementId: [''],
        optionsId: [''],
        description: [''],
        fichier: [null]
      });
    }

  ngOnInit(): void {
    this.loadDepartements();
    this.loadFaculties();
    this.loadOptions();

  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      fichier: file
    });
    
    if(!this.validateFile(file.name)){
      console.log('Selected file format is not supported, try to choose excel file');
    }else{
      this.form.get('fichier').updateValueAndValidity()
    }
  }

  onSubmit(){
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("title", this.form.get('title').value);
    formData.append("description", this.form.get('description').value);
    formData.append("facultyId", this.form.get('facultyId').value);
    formData.append("optionsId", this.form.get('optionsId').value);
    formData.append("departementId", this.form.get('departementId').value);
    formData.append("fichier", this.form.get('fichier').value);

    this.postService.save(formData).subscribe(
      data => {
        console.log('data saved successfuly');
        this.router.navigateByUrl('posts/home');
            },
      error => {
        console.log(error);
      }
    );
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'pdf' || ext.toLowerCase() == 'docx' || ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg' || ext.toLowerCase() == 'xls' || ext.toLowerCase() == 'xlsx') {
      this.message=null;

        return true;
    }
    else {
      this.message = 'Le type de fichier choisis n est pas supporter, veuillez choisir un valide';
        return false;
    }
  }

  loadFaculties(){
    this.facultyService.getAll().subscribe(
      data => {
        this.faculties = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadDepartements(){
    this.departementService.getAll().subscribe(
      data => {
        this.departements = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadOptions(){
    this.optionsService.getAllOptions().subscribe(
      data => {
        this.optionses = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
