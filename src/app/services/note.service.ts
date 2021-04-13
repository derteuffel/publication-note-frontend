import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl = 'http://localhost:8080/api/notes';

  currentUser: User;
  headers: HttpHeaders;
  formHeaders: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer '+ this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
    this.formHeaders = new HttpHeaders({
      authorization: 'Bearer '+ this.currentUser.token
    });
  }

  saveList(fileForm): Observable<any>{
    return this.http.post(this.noteUrl, fileForm, {headers: this.formHeaders});
  }

  getSessionByUser(id): Observable<any>{
    return this.http.get(this.noteUrl+'/users/'+id, {headers: this.headers});
  }

  getSessionByUserAndNiveau(id, formData): Observable<any>{
    return this.http.post(this.noteUrl+'/users/niveau/'+id, formData, {headers: this.headers});
  }

  getSessionByUserAndMatricule(form): Observable<any>{
    return this.http.post(this.noteUrl+'/users/matricule/periode/niveau', form, {headers: this.headers});
  }

  getSession(id): Observable<any>{
    return this.http.get(this.noteUrl+'/get/'+id, {headers: this.headers});
  }

  getSessionByUserAndIdAndPeriodeAndNiveau(id, form): Observable<any>{
    return this.http.post(this.noteUrl+'/users/periode/niveau/'+id, form, {headers: this.headers});
  }

  getNoteBySession(id): Observable<any>{
    return this.http.get(this.noteUrl+'/sessions/'+id, {headers: this.headers});
  }
}
