import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;
  isListNull: boolean;
  fileForm: FormGroup;
  message: string;

  constructor(private facultyService: FacultyService, private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.loadAll();
    this.fileForm = this.fb.group({
      file: ['']
    });
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
    this.facultyService.saveFaculties(formData).subscribe(
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

  loadAll(){
    this.facultyService.getAll().subscribe(

      data => {
        this.lists = data;
        if(data === null){
          this.isListNull = true;
        }else{
          this.isListNull = false;
        }
        console.log(data);
      }
    );
  }

  reload(){
    window.location.reload();
  }

}
