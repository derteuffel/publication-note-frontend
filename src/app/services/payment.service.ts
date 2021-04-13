import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  currentUser: User;
  headers: HttpHeaders;

  private paymentUrl = 'http://localhost:8080/api/payments/';

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization: 'Bearer '+ this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }

  addPayment(form): Observable<any>{
    return this.http.post(this.paymentUrl, form, {headers: this.headers});
  }

  getPaymentByUser(id): Observable<any>{
    return this.http.get(this.paymentUrl+'user/'+id, {headers: this.headers});
  }

  sendCode(form, id): Observable<any>{
    return this.http.post(this.paymentUrl+'sent/'+id,form, {headers: this.headers});
  }
}
