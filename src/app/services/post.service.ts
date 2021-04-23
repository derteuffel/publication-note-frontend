import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentUser: User;
  headers: HttpHeaders;
  formHeaders: HttpHeaders;
  private postUrl = 'http://localhost:8080/api/posts';

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
    return this.http.get(this.postUrl,{headers:this.headers});
  }

  getAllByFaculty(id): Observable<any>{
    return this.http.get(this.postUrl+'/faculty/'+id, {headers: this.headers});
  }

  getAllByDepartement(id): Observable<any>{
    return this.http.get(this.postUrl+'/departememt/'+id, {headers: this.headers});
  }

  getAllbyOptions(id): Observable<any>{
    return this.http.get(this.postUrl+'/options/'+id, {headers: this.headers});
  }

  getOne(id): Observable<any>{
    return this.http.get(this.postUrl+'/'+id, {headers: this.headers});
  }

  save(form): Observable<any>{
    return this.http.post(this.postUrl, form, {headers: this.formHeaders});
  }

  delete(id): Observable<any>{
    return this.http.delete(this.postUrl+'/'+id, {headers: this.headers});
  }
}
