import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private facultyUrl = 'http://localhost:8080/api/faculties';

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
    return this.http.get(this.facultyUrl, {headers: this.headers});
  }

  saveFaculties(form): Observable<any>{
    return this.http.post(this.facultyUrl, form, {headers: this.formHeaders});
  }

  getFaculty(id): Observable<any>{
    return this.http.get(this.facultyUrl+'/'+id, {headers: this.headers});
  }

  updateFaculty(id, form): Observable<any>{
    console.log(form);
    return this.http.put(this.facultyUrl+'/'+id,form, {headers: this.headers});
  }

  getFacultyByUser(id): Observable<any>{
    return this.http.get(this.facultyUrl+'/users/'+id, {headers: this.headers});
  }
}
