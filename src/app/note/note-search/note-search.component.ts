import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Niveau } from 'src/app/enums/niveau-enum';
import { Session } from 'src/app/enums/session';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css']
})
export class NoteSearchComponent implements OnInit {

  form: FormGroup;
  isLoaded: boolean;
  isSubmitted: boolean;
  periodes: any = {};
  level: any = {};
  session: any = {};
  etudiant: any = {};
  lists: any = {};
  constructor(public fb: FormBuilder, private noteService: NoteService, private router: Router) {

    this.form = this.fb.group({
      name: [''],
      matricule: [''],
      niveau: ['']
    });
   }

  ngOnInit(): void {

    this.periodes = Object.keys(Session);
    this.level = Object.keys(Niveau);
  }

  onSubmit(){
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("niveau", this.form.get('niveau').value);
    formData.append("matricule", this.form.get('matricule').value);

    this.noteService.getSessionByUserAndMatricule(formData).subscribe(
      data => {
        console.log(data);
        this.isSubmitted = true;
        this.session = data;
        console.log(data);
        this.loadAllNotes(data.id);
        this.etudiant = data.userInfo;
        console.log(data.userInfo);
            },
      error => {
        console.log(error);
      }
    );
  }

  loadAllNotes(id){
    this.noteService.getNoteBySession(id).subscribe(
      data => {
        this.lists = data;
        if(data === null){
          this.isLoaded = true;
        }else{
          this.isLoaded = false;
        }
        console.log(data);

      },
      error => {
        console.log(error);
      }
    );
  }

  reload(){
    window.location.reload();
  }

}
