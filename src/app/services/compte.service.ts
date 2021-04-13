import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private compteUr = 'http://localhost:8080/api/accounts';
  private registerUrl = 'http://localhost:8080/api/auth/';
  currentUser: User;
  headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer '+ this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  getAll(): Observable<any>{
    return this.http.get(this.compteUr, {headers: this.headers});
  }

  addCompte(form): Observable<any>{
    return this.http.post(this.registerUrl+'new/account', form, {headers: this.headers});
  }
  

  activeCompte(id): Observable<any>{
    return this.http.get(this.compteUr+'/active/'+id, {headers: this.headers});
  }

  getCompte(id): Observable<any>{
    return this.http.get(this.compteUr+'/'+id, {headers: this.headers});
  }
}
