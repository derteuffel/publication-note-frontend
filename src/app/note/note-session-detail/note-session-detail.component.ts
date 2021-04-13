import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-session-detail',
  templateUrl: './note-session-detail.component.html',
  styleUrls: ['./note-session-detail.component.css']
})
export class NoteSessionDetailComponent implements OnInit {

  etudiant: any = {};
  session: any = {};
  lists: any = {};
  isListNull: boolean;

  constructor(private etudiantService: EtudiantService, private noteService: NoteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAllNotes(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSession(this.activatedRoute.snapshot.paramMap.get('id'));
  }


  getSession(id){
    this.noteService.getSession(id).subscribe(
      data => {
        this.session = data;
        this.etudiant = data.userInfo;
        console.log(data);
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
