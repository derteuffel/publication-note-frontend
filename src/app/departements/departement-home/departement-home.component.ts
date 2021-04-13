import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-departement-home',
  templateUrl: './departement-home.component.html',
  styleUrls: ['./departement-home.component.css']
})
export class DepartementHomeComponent implements OnInit {

  lists: any = {};
  isListNull: boolean;
  departement: any = {};

  fileForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private optionsService: OptionsService,
    private departementService: DepartementService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDepartement(this.activatedRoute.snapshot.paramMap.get('id')); 
    this.fileForm = this.fb.group({
      file: ['']
    });
  }

  getDepartement(id){
    this.departementService.getDepartement(id).subscribe(
      data => {
        this.departement = data;
        console.log(data);
        this.getAllOptions(data.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllOptions(id){
    this.departementService.getOptions(id).subscribe(
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
      this.fileForm.get('file').setValue(file);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.fileForm.get('file').value);
    this.optionsService.saveOptions(formData, this.departement.id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
