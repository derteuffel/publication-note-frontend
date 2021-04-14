import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private etudiantUrl = 'http://localhost:8080/api/etudiants/';

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

  getAll(): Observable<any>{
    return this.http.get(this.etudiantUrl, {headers: this.headers});
  }

  saveList(fileForm, id): Observable<any>{
    return this.http.post(this.etudiantUrl+'many/saves/'+id, fileForm, {headers: this.formHeaders});
  }

  saveEtudiant(form, id): Observable<any>{
    return this.http.post(this.etudiantUrl+id, form, {headers: this.headers});
  }

  getEtudiant(id): Observable<any>{
    return this.http.get(this.etudiantUrl+id, {headers: this.headers});
  }

  updateEtutiant(form, id): Observable<any>{
    return this.http.put(this.etudiantUrl+id, form, {headers: this.headers});
  }

  getEtudiantByOptions(id): Observable<any>{
    return this.http.get(this.etudiantUrl+'options/'+id, {headers: this.headers});
  }


  deleteEtudiant(id): Observable<any>{
    return this.http.delete(this.etudiantUrl+id, {headers: this.headers});
  }
}
