import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private departementUrl = 'http://localhost:8080/api/departements';
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

  getAllByFaculty(id): Observable<any>{
    return this.http.get(this.departementUrl+'/faculty/'+id, {headers: this.headers});
  }

  getDepartement(id): Observable<any>{
    return this.http.get(this.departementUrl+'/'+id, {headers: this.headers});
  }

  getOptions(id): Observable<any>{
    return this.http.get(this.departementUrl+'/options/'+id, {headers: this.headers});
  }

  saveOptions(form, id): Observable<any>{
    return this.http.post(this.departementUrl+'/options/save/'+id, form, {headers: this.formHeaders});
  }

  saveDepartements(form, id): Observable<any>{
    return this.http.post(this.departementUrl+'/save/'+id, form, {headers: this.formHeaders});
  }

  updateDepartement(id, form): Observable<any>{
    return this.http.put(this.departementUrl+'/'+id, form, {headers: this.headers});
  }

  getOneOptions(id): Observable<any>{
    return this.http.get(this.departementUrl+'/get/options/'+id, {headers: this.headers});
  }
}
