import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;

  fileForm: FormGroup;

  constructor(private etudiantService: EtudiantService, private fb: FormBuilder,
    private router: Router, private optionsService: OptionsService) { }

  ngOnInit(): void {
    this.loadAll();
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

  

  loadAll(){
    this.etudiantService.getAll().subscribe(
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
