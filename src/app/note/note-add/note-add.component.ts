import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveau } from 'src/app/enums/niveau-enum';
import { Periodes } from 'src/app/enums/periode-enum';
import { Session } from 'src/app/enums/session';

import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  form: FormGroup;
  periodes: any = {};
  level: any = {};
  constructor(public fb: FormBuilder, private noteService: NoteService, private router: Router) {

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
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      fichier: file
    });
    this.form.get('fichier').updateValueAndValidity()
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

}
