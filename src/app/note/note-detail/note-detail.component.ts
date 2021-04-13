import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Niveau } from 'src/app/enums/niveau-enum';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  etudiant: any = {};
  lists: any = {};
  isListNull: boolean;
  levels: any = {};

  constructor(private etudiantService: EtudiantService, private noteService: NoteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiant(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loadAllSession(this.activatedRoute.snapshot.paramMap.get('id'));
    this.levels = Object.keys(Niveau);
  }

  getEtudiant(id){
    this.etudiantService.getEtudiant(id).subscribe(
      data => {
        this.etudiant = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadAllSession(id){
    this.noteService.getSessionByUser(id).subscribe(
      data => {
        this.lists = data;
        if(data === null){
          this.isListNull = true;
        }else{
          this.isListNull = false;
        }
        console.log(data);

      },
      error => {
        console.log(error);
      }
    );
  }

  findByUserAndNiveau(niveau){
    console.log(niveau);
  
    var formData : any = new FormData();
    formData.append("niveau", niveau);
    this.noteService.getSessionByUserAndNiveau(this.etudiant.id, formData).subscribe(
    data => {
      this.lists = data;
      if(data === null){
        this.isListNull = true;
      }else{
        this.isListNull = false;
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
