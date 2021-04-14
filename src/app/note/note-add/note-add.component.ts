import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveau } from 'src/app/enums/niveau-enum';
import { Periodes } from 'src/app/enums/periode-enum';
import { Session } from 'src/app/enums/session';

import { NoteService } from 'src/app/services/note.service';
import { OptionsService } from 'src/app/services/options.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  form: FormGroup;
  periodes: any = {};
  level: any = {};
  years: string[];
  message: string;
  lists: any = {};
  constructor(public fb: FormBuilder, private noteService: NoteService, private router: Router, 
    private optionsService: OptionsService) {

    this.form = this.fb.group({
      periode: [''],
      annee: [''],
      filiere: [''],
      niveau: [''],
      fichier: [null]
    });
   }

  ngOnInit(): void {

    this.periodes = Object.keys(Session);
    this.level = Object.keys(Niveau);
    this.years = [
      '2020-2021',
      '2021-2022',
      '2022-2023',
      '2023-2024',
      '2024-2025',
      '2025-2026',
      '2026-2027',
      '2027-2028',
      '2028-2029',
      '2029-2030',
      '2030-2031',
      '2031-2032',
      '2032-2033',
      '2033-2034',
      '2034-2035',
      '2035-2036',
      '2036-2037',
      '2037-2038'
  ];
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
    formData.append("periode", this.form.get('periode').value);
    formData.append("annee", this.form.get('annee').value);
    formData.append("filiere", this.form.get('filiere').value);
    formData.append("niveau", this.form.get('niveau').value);
    formData.append("fichier", this.form.get('fichier').value);

    this.noteService.saveList(formData).subscribe(
      data => {
        console.log('data saved successfuly');
        this.router.navigateByUrl('notes/home');
            },
      error => {
        console.log(error);
      }
    );
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xlsx' || ext.toLowerCase() == 'xls') {
      this.message=null;

        return true;
    }
    else {
      this.message = 'Le type de fichier choisis n est pas supporter, veuillez choisir un fichier excel';
        return false;
    }
  }

  getAllOptions(){
    this.optionsService.getAllOptions().subscribe(

      data => {
        this.lists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
