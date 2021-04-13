import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-options-home',
  templateUrl: './options-home.component.html',
  styleUrls: ['./options-home.component.css']
})
export class OptionsHomeComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;
  options: any = {};

  fileForm: FormGroup;

  constructor(private etudiantService: EtudiantService, private fb: FormBuilder,
    private router: Router, private departementService: DepartementService,
    private activatedRoute: ActivatedRoute, private optionsService: OptionsService) { }

  ngOnInit(): void {
    this.getOptions(this.activatedRoute.snapshot.paramMap.get('id'));
    this.fileForm = this.fb.group({
      file: ['']
    });
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.get('file').setValue(file);
    }
  }

  getOptions(id){
    this.optionsService.getOptions(id).subscribe(
      data => {
          this.options = data;
          console.log(data);
          this.loadAll(data.id);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.fileForm.get('file').value);
    this.etudiantService.saveList(formData, this.options.id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  loadAll(id){
    this.etudiantService.getEtudiantByOptions(id).subscribe(
      data => {
        this.lists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(id){
    this.etudiantService.deleteEtudiant(id).subscribe(
      data => {
        console.log('Your student have been deleted successfuly');
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
