import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.css']
})
export class NoteHomeComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;

  fileForm: FormGroup;

  constructor(private etudiantService: EtudiantService, private fb: FormBuilder,
    private router: Router, private noteService: NoteService) { }

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

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.fileForm.get('file').value);
    this.noteService.saveList(formData).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
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

}
