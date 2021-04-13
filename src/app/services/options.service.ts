import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  currentUser: User;
  headers: HttpHeaders;
  formHeaders: HttpHeaders;
  private optionsUrl = 'http://localhost:8080/api/options';
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

  getAllOptionsByDepartement(id): Observable<any>{
    return this.http.get(this.optionsUrl+'/departements/'+id, {headers: this.headers});
  }

  saveOptions(form, id): Observable<any>{
    return this.http.post(this.optionsUrl+'/'+id, form, {headers: this.formHeaders});
  }

  getOptions(id): Observable<any>{
    return this.http.get(this.optionsUrl+'/'+id, {headers: this.headers});
  }
}
